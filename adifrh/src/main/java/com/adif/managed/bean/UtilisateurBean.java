package com.adif.managed.bean;

import java.io.Serializable;
import java.util.List;

import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;

import org.primefaces.event.SelectEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.adif.model.Utilisateur;
import com.adif.service.ClientService;
import com.adif.service.NotificationService;
import com.adif.service.UtilisateurService;
import com.adif.utils.JsfUtils;

@Component
@Scope("session")
public class UtilisateurBean implements Serializable {

	private static final long serialVersionUID = 1L;

	@Autowired
	private UtilisateurService utilisateurService;

	@Autowired
	private ClientService clientService;
	@Autowired
	private ClientBean clientBean;

	@Autowired
	private NotificationService notificationService;

	List<Utilisateur> utilisateurList;

	private int idClient;

	private Utilisateur utilisateur;

	
	public boolean init() {
		utilisateur = null;
		utilisateurList = utilisateurService.findAll();
		return true;
	}

	public void ajouterUtilisateur() {
		utilisateur = new Utilisateur();
		idClient = 1;
	}

	public void onRowSelect(SelectEvent event) {
		utilisateur = (Utilisateur) event.getObject();
		idClient = utilisateur.getClient().getId();
	}

	public void addUtilisateur() {
		utilisateur.setClient(clientService.getClientById(idClient));
		utilisateurService.addUtilisateur(utilisateur);
		init();
		FacesContext.getCurrentInstance().addMessage(
				null,
				new FacesMessage(FacesMessage.SEVERITY_INFO,
						"Utilisateur ajouté. ", null));

		notificationService
				.notifier(utilisateur, "Votre compte est créé", true);
	}

	public void deleteUtilisateur() {

		utilisateurService.deleteUtilisateur(utilisateur);
		utilisateur = new Utilisateur();
		utilisateur.setClient(clientBean.getClientList().get(0));
		utilisateurList = utilisateurService.findAll();
	}

	public List<Utilisateur> getUtilisateurList() {
		return utilisateurList;
	}

	public void updateUtilisateur() {
		utilisateur.setClient(clientService.getClientById(idClient));
		utilisateur = utilisateurService.updateUtilisateur(utilisateur);
		init();
		FacesContext.getCurrentInstance().addMessage(
				null,
				new FacesMessage(FacesMessage.SEVERITY_INFO,
						"Utilisateur modifié. ", null));
	}

	public void initMdpUtilisateur(Utilisateur utilisateurSeleted) {
		utilisateurSeleted.setMotpasse(JsfUtils.encodeMD5("adif"));

		utilisateurService.updateUtilisateur(utilisateurSeleted);

		FacesContext.getCurrentInstance().addMessage(
				null,
				new FacesMessage(FacesMessage.SEVERITY_INFO,
						"Le mot de passe de " + utilisateurSeleted.getPrenom()
								+ " " + utilisateurSeleted.getNom()
								+ " a été réinitialisé.", null));

	}

	public Utilisateur getUtilisateur(int id) {

		return utilisateurService.getUtilisateurById(id);

	}

	public UtilisateurService getUtilisateurService() {
		return utilisateurService;
	}

	public void setUtilisateurService(UtilisateurService utilisateurService) {
		this.utilisateurService = utilisateurService;
	}

	public void setUtilisateurList(List<Utilisateur> utilisateurList) {
		this.utilisateurList = utilisateurList;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	public ClientService getClientService() {
		return clientService;
	}

	public void setClientService(ClientService clientService) {
		this.clientService = clientService;
	}

	public int getIdClient() {
		return idClient;
	}

	public void setIdClient(int idClient) {
		this.idClient = idClient;
	}

	public ClientBean getClientBean() {
		return clientBean;
	}

	public void setClientBean(ClientBean clientBean) {
		this.clientBean = clientBean;
	}

}