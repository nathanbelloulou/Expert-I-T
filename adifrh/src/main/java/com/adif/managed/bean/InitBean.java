package com.adif.managed.bean;

import java.io.Serializable;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;

import javax.annotation.PostConstruct;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ApplicationScoped;
import javax.faces.context.FacesContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.adif.model.Client;
import com.adif.model.Conges;
import com.adif.model.JourOff;
import com.adif.model.Message;
import com.adif.model.Utilisateur;
import com.adif.service.ClientService;
import com.adif.service.CongesService;
import com.adif.service.JourOffService;
import com.adif.service.MessageService;
import com.adif.service.UtilisateurService;
import com.adif.utils.FileTransfertUtil;

@Component
@ApplicationScoped
public class InitBean implements Serializable {

	private static final long serialVersionUID = 1L;

	public String destination = "./";

	@Autowired
	private JourOffService jourOffService;

	@Autowired
	private ClientService clientService;

	@Autowired
	private CongesService congesService;

	@Autowired
	private MessageService messageService;

	@Autowired
	private UtilisateurService utilisateurService;

	private String messageAccueil;
	private String messageCra;

	private Path dirAdif;

	private Path dirMessage;

	private Path fileMessageAccueil;

	private Path fileMessageCra;

	private Path dirDocument;

	private Path dirCra;

	@PostConstruct
	private void init() {
		initFile();
		setMessageAccueil(FileTransfertUtil.readFileAsString(fileMessageAccueil
				.toString()));

		Client client = new Client();
		client.setNom("Adif");
		clientService.addClient(client);
		client = clientService.getClientById(1);
		Utilisateur utilisateur = new Utilisateur();
		utilisateur.setClient(client);
		utilisateur.setNom("Belloulou");
		utilisateur.setPrenom("Nathan");
		utilisateur.setMotpasse("nat");
		utilisateur.setAbilitationAdministrateur(false);
		utilisateur.setIdentifiant("nat");
		utilisateur.setEmail("nathan@belloulou.com");
		utilisateurService.addUtilisateur(utilisateur);
		Utilisateur utilisateur2 = new Utilisateur();
		utilisateur2.setClient(client);
		utilisateur2.setEmail("nathan@belloulou.com");
		utilisateur2.setNom("Hattab");
		utilisateur2.setPrenom("Line");
		utilisateur2.setMotpasse("nat");
		utilisateur2.setAbilitationAdministrateur(true);
		utilisateur2.setIdentifiant("admin");

		utilisateurService.addUtilisateur(utilisateur2);
		Message amessage = new Message();
		amessage.setDateCreation(new Date());

		amessage.setLibelle("Message simple");

		amessage.setContent("Un intranet est un réseau informatique utilisé à l'intérieur d'une entreprise ou de toute autre entité organisationnelle qui utilise les mêmes protocoles qu'Internet.");
		messageService.addMessage(amessage);

		Message amessag1 = new Message();
		amessag1.setDateCreation(new Date());
		amessag1.setLibelle("Veuillez saisir votre Compte rendu d'actvitité");

		amessag1.setContent("Un inprotocoles qu'Internet.");
		messageService.addMessage(amessag1);

		JourOff jourOff = new JourOff();
		jourOff.setDate(new Date());
		jourOff.setLibelle("Mon anniversaire");
		jourOffService.addJourOff(jourOff);

		Conges conges = new Conges();
		conges.setUtilisateur(utilisateur);
		conges.setDateCreation(new Date());

		conges.setFin(new Date());
		conges.setDebut(new Date());

		congesService.addConges(conges);

	}

	public void initFile() {

		dirAdif = Paths.get("racineAdif");
		FileTransfertUtil fileTransfertUtil = new FileTransfertUtil();
		fileTransfertUtil.createDirectoryIfNotExist(dirAdif);

		dirMessage = Paths
				.get(dirAdif.toAbsolutePath().toString() + "/message");
		fileTransfertUtil.createDirectoryIfNotExist(dirMessage);
		fileMessageAccueil = Paths.get(dirMessage.toAbsolutePath().toString()
				+ "/messageAccueil.html");
		fileTransfertUtil.createFileIfNotExist(fileMessageAccueil);
		fileMessageCra = Paths.get(dirMessage.toAbsolutePath().toString()
				+ "/messageCra.html");
		fileTransfertUtil.createFileIfNotExist(fileMessageCra);

		dirDocument = Paths.get(dirAdif.toAbsolutePath().toString()
				+ "/document");
		fileTransfertUtil.createDirectoryIfNotExist(dirDocument);
		dirCra = Paths.get(dirAdif.toAbsolutePath().toString() + "/cra");
		fileTransfertUtil.createDirectoryIfNotExist(dirCra);

	}

	public ClientService getClientService() {
		return clientService;
	}

	public void setClientService(ClientService clientService) {
		this.clientService = clientService;
	}

	public JourOffService getJourOffService() {
		return jourOffService;
	}

	public void setJourOffService(JourOffService jourOffService) {
		this.jourOffService = jourOffService;
	}

	public MessageService getMessageService() {
		return messageService;
	}

	public void setMessageService(MessageService messageService) {
		this.messageService = messageService;
	}

	public UtilisateurService getUtilisateurService() {
		return utilisateurService;
	}

	public void setUtilisateurService(UtilisateurService utilisateurService) {
		this.utilisateurService = utilisateurService;
	}

	public CongesService getCongesService() {
		return congesService;
	}

	public void setCongesService(CongesService congesService) {
		this.congesService = congesService;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getMessageAccueil() {
		return messageAccueil;
	}

	public void setMessageAccueil(String messageAccueil) {
		this.messageAccueil = messageAccueil;
	}

	public void saveMessageAccueil() {
		FileTransfertUtil.writeStringInFile(fileMessageAccueil, messageAccueil);
		FacesContext.getCurrentInstance().addMessage(
				null,
				new FacesMessage(FacesMessage.SEVERITY_INFO,
						"Le message d'acceuil est enregistré. ", null));

	}

	public Path getDirAdif() {
		return dirAdif;
	}

	public void setDirAdif(Path dirAdif) {
		this.dirAdif = dirAdif;
	}

	public Path getDirMessage() {
		return dirMessage;
	}

	public void setDirMessage(Path dirMessage) {
		this.dirMessage = dirMessage;
	}

	public Path getFileMessageAccueil() {
		return fileMessageAccueil;
	}

	public void setFileMessageAccueil(Path fileMessageAccueil) {
		this.fileMessageAccueil = fileMessageAccueil;
	}

	public Path getFileMessageCra() {
		return fileMessageCra;
	}

	public void setFileMessageCra(Path fileMessageCra) {
		this.fileMessageCra = fileMessageCra;
	}

	public Path getDirDocument() {
		return dirDocument;
	}

	public void setDirDocument(Path dirDocument) {
		this.dirDocument = dirDocument;
	}

	public Path getDirCra() {
		return dirCra;
	}

	public void setDirCra(Path dirCra) {
		this.dirCra = dirCra;
	}

	public String getMessageCra() {
		return messageCra;
	}

	public void setMessageCra(String messageCra) {
		this.messageCra = messageCra;
	}
}
