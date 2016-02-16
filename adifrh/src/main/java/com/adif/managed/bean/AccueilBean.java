package com.adif.managed.bean;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.context.FacesContext;
import javax.servlet.http.HttpServletResponse;

import org.primefaces.event.FileUploadEvent;
import org.primefaces.model.DefaultStreamedContent;
import org.primefaces.model.StreamedContent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.adif.model.Cra;
import com.adif.model.Notification;
import com.adif.service.CraService;
import com.adif.service.DocumentService;
import com.adif.service.MessageService;
import com.adif.service.NotificationService;
import com.adif.utils.AuthBean;
import com.adif.utils.FileTransfertUtil;

@Component
@Scope("session")
public class AccueilBean {

	@Autowired
	private MessageService messageService;

	@Autowired
	private InitBean initBean;

	@Autowired
	private DocumentService documentService;

	@Autowired
	private NotificationService notificationService;

	@Autowired
	private AuthBean authBean;

	@Autowired
	private CraService craService;
	private List<File> files;
	private String message;
	private String menuActif, titre;
	private List<Cra> cras;
	private List<Notification> notifications;

	@PostConstruct
	public void init() {
		setMessage(initBean.getMessageAccueil());
		menuActif = "accueil";
		listFile();
		setNotifications(notificationService.findAllNotificationUser(authBean
				.getUtilisateur()));
	}

	public void bouton() {
		notificationService.findAllNotificationUser(authBean.getUtilisateur());
	}

	public void initCra() {
		cras = craService.findCraByDate(Calendar.getInstance().getTime());
		// System.out.println("requestBean"+Calendar.getInstance().getTime()+"  "+cras.size());

		listFile();
	}

	public void upload(FileUploadEvent event) {

		// Do what you want with the file
		// Document document= new Document();
		try {
			stream = event.getFile().getInputstream();

			// document.setLibelle(event.getFile().getFileName());
			// document.setContent(
			// IOUtils.toByteArray(event.getFile().getInputstream()));
			FileTransfertUtil.copyFile(event.getFile().getFileName(), event
					.getFile().getInputstream(), initBean.destination);
		} catch (IOException e) {
			e.printStackTrace();
		}
		listFile();
		// documentService.addDocument(document);

	}

	private void listFile() {

		files = new ArrayList<File>();
		File folder = new File(initBean.destination);
		File[] listOfFiles = folder.listFiles();

		for (File listOfFile : listOfFiles) {
			if (listOfFile.isFile()) {
				files.add(listOfFile);
			}
		}
	}

	public StreamedContent downLoad(String f) throws IOException {
		FacesContext context = FacesContext.getCurrentInstance();
		HttpServletResponse response = (HttpServletResponse) context
				.getExternalContext().getResponse();
		File file = new File(initBean.destination + f);
		if (!file.exists()) {
			response.sendError(HttpServletResponse.SC_NOT_FOUND);
			return null;
		}
		StreamedContent test = new DefaultStreamedContent(new FileInputStream(
				file), null, file.getName());

		return test;
	}

	InputStream stream;

	public DocumentService getDocumentService() {
		return documentService;
	}

	public void setDocumentService(DocumentService documentService) {
		this.documentService = documentService;
	}

	public List<File> getFiles() {
		return files;
	}

	public void setFiles(List<File> files) {
		this.files = files;
	}

	public CraService getCraService() {
		return craService;
	}

	public void setCraService(CraService craService) {
		this.craService = craService;
	}

	public String getMenuActif() {
		return menuActif;
	}

	public void setMenuActif(String menuActif) {
		this.menuActif = menuActif;
	}

	public List<Cra> getCras() {
		return cras;
	}

	public void setCras(List<Cra> cras) {
		this.cras = cras;
	}

	public String getMessage() {
		return message+"sdsd";
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public List<Notification> getNotifications() {
		return notifications;
	}

	public void setNotifications(List<Notification> notifications) {
		this.notifications = notifications;
	}

}
