package com.adif.managed.bean;

import java.io.File;
import java.io.IOException;
import java.text.DateFormatSymbols;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;

import org.primefaces.event.FileUploadEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.adif.model.Activite;
import com.adif.model.CategorieActivite;
import com.adif.model.Cra;
import com.adif.model.Etat;
import com.adif.model.TypeActivite;
import com.adif.model.Utilisateur;
import com.adif.service.CongesService;
import com.adif.service.CraService;
import com.adif.service.NotificationService;
import com.adif.service.UtilisateurService;
import com.adif.utils.AuthBean;
import com.adif.utils.DateUtil;
import com.adif.utils.FileTransfertUtil;

@Component
@Scope("session")
public class CraBean {

	@Autowired
	private CraService craService;

	@Autowired
	private CongesService congesService;

	@Autowired
	private AccueilBean accueilBean;

	@Autowired
	private InitBean initBean;

	@Autowired
	private AuthBean authBean;

	@Autowired
	private NotificationService notificationService;

	@Autowired
	private UtilisateurService utilisateurService;

	public Integer nbJour;
	private String nbJourSaisie;
	private String nbCongesException;
	private String nbJourException;
	public Date dateCourante;

	private Cra cra;
	public List<Activite> jours;
	private List<Activite> joursException;
	private List<Activite> congesException;
	private File file;

	private List<Cra> cras;

	private boolean afficherCra;

	private List<Utilisateur> utilisateurs;

	@PostConstruct
	public void init() {

		// Mise à vide des compteurs
		resetCompteur();
		// mettre en place la date du jour si elle n'existe pas
		if (dateCourante == null) {
			dateCourante = Calendar.getInstance().getTime();
		}

		if (authBean.getUtilisateur().isAbilitationAdministrateur()) {
			cras = craService.filtre(null, null);
		} else {

			// recherche dans la bd s'il existe un cra courant
			cra = craService.findCraByDateId(dateCourante, authBean
					.getUtilisateur().getId());
			if (cra != null) {
				extractCra(cra);
				setAfficherCra(true);
			} else {
				setAfficherCra(false);
				// cra = buildCra(dateCourante);
			}
		}
	}

	public void update(Cra cra) {
		craService.updateCra(cra);
		init();
	}

	public void supprimer(Cra cra) {
		craService.deleteCra(cra);
		init();
	}

	public void ouvrirCra() {

		List<Cra> newcra = craService.ouvrirCra(dateCourante);
		notificationService.notifierSaisirCra(newcra);

		Calendar cal = Calendar.getInstance();
		cal.setTime(dateCourante);
		FacesContext.getCurrentInstance().addMessage(
				null,
				new FacesMessage(FacesMessage.SEVERITY_INFO, "Les cra de "
						+ newcra.size()
						+ " utilisateur(s) ont été ouverts pour le mois de "
						+ new DateFormatSymbols().getMonths()[cal
								.get(Calendar.MONTH)] + " "
						+ cal.get(Calendar.YEAR) + ".", null));

		init();
	}

	public Cra buildCra(Date aDateCourante) {
		Cra aCra = new Cra();
		aCra.setMois(aDateCourante);
		aCra.setEtat(Etat.OUVERT);
		HashSet<Date> actConges = congesService.dateConges(authBean
				.getUtilisateur().getId(), aDateCourante);
		// TODO AJouter les dates off jours féries
		setJours(activites(dateCourante, actConges, TypeActivite.ACTIVITE));
		setJoursException(activites(dateCourante, actConges,
				TypeActivite.ACTIVITEX));
		setCongesException(activites(dateCourante, actConges,
				TypeActivite.CONGES));
		// recuperation
		nbJour = nbJour(jours);
		return aCra;
	}

	private void compactCra(Cra aCra, List<Activite> jours,
			List<Activite> congesException, List<Activite> joursException) {
		List<Activite> acts = new ArrayList<Activite>(jours);
		acts.addAll(congesException);
		acts.addAll(joursException);
		aCra.setActivites(acts);
	}

	private void extractCra(Cra aCra) {
		setJours(extract(aCra.getActivites(), TypeActivite.ACTIVITE));
		setJoursException(extract(aCra.getActivites(), TypeActivite.ACTIVITEX));
		setCongesException(extract(aCra.getActivites(), TypeActivite.CONGES));
		setNbJourSaisie(compteur(jours));
		setNbJourException(compteur(joursException));
		setNbCongesException(compteur(congesException));
	}

	public void saveCra() {
		compactCra(cra, jours, congesException, joursException);
		cra.setMois(dateCourante);
		cra.setEtat(Etat.ENREGISTRER);
		cra.setUtilisateur(utilisateurService.getUtilisateurById(authBean
				.getUtilisateur().getId()));

		craService.addCra(cra);
		init();
		accueilBean.initCra();
	}

	public void soumettreCra() {
		compactCra(cra, jours, congesException, joursException);
		cra.setEtat(Etat.TRANSMIS);
		craService.addCra(cra);
		init();
		accueilBean.initCra();
	}

	public void setJoursReset() {
		for (Activite activite : jours) {
			activite.setValue(null);
		}
		for (Activite activite : congesException) {
			activite.setValue(null);
		}
		for (Activite activite : joursException) {
			activite.setValue(null);
		}
		resetCompteur();
	}

	public void remplissageAuto() {
		for (Activite activite : jours) {
			Calendar cal = Calendar.getInstance();
			cal.setTime(activite.getDate());
			if (activite.getCategorie() == CategorieActivite.ACTIF) {
				activite.setValue("1");
			}
		}
	}

	public void resetCompteur() {
		nbJourSaisie = "0.0";
		nbCongesException = "0.0";
		nbJourException = "0.0";

	}

	public void moisSuivant() {
		dateCourante = DateUtil.moisSuivant(dateCourante);
		init();
	}

	public void moisPrecedent() {
		dateCourante = DateUtil.moisPrecedent(dateCourante);
		init();
	}

	public List<Activite> activites(Date date, HashSet<Date> actConges,
			TypeActivite type) {
		List<Activite> activiti = new ArrayList<Activite>();
		List<Date> dates = DateUtil.createMonthLabels(date);
		Calendar c = Calendar.getInstance();
		for (Date dat : dates) {
			c.setTime(dat);
			if (c.get(Calendar.DAY_OF_WEEK) == 1
					|| c.get(Calendar.DAY_OF_WEEK) == 7) {

				activiti.add(new Activite(dat, type, CategorieActivite.WKD));
			} else if (actConges.contains(dat)) {
				activiti.add(new Activite(dat, type, CategorieActivite.CONGES));
			} else {

				activiti.add(new Activite(dat, type, CategorieActivite.ACTIF));

			}
		}
		return activiti;
	}

	public List<Activite> extract(Collection<Activite> activite,
			TypeActivite type) {
		List<Activite> activiteToExtraxt = new ArrayList<Activite>(activite);
		List<Activite> activiti = new ArrayList<Activite>();
		for (Activite act : activiteToExtraxt) {
			if (act.getType() == type) {
				activiti.add(act);

			}
		}
		return activiti;

	}

	public String compteur(List<Activite> activite) {
		Double compt = 0d;
		for (Activite act : activite) {
			if (act.getValue() != "" && act.getValue() != null) {
				compt = compt + Double.parseDouble(act.getValue());
			}
		}
		return String.valueOf(compt);
	}

	public Integer nbJour(List<Activite> dates) {
		Integer nbJoursaisissable = 0;

		Calendar c = Calendar.getInstance();
		for (Activite act : dates) {
			c.setTime(act.getDate());
			if (c.get(Calendar.DAY_OF_WEEK) != 1
					&& c.get(Calendar.DAY_OF_WEEK) != 7) {

				nbJoursaisissable = nbJoursaisissable + 1;
			}
		}

		return nbJoursaisissable;

	}

	public void etatSuivant(Cra cra) {

		cra.setEtat(cra.getEtat().getSuivant());
		craService.updateCra(cra);
		init();

	}

	public void upload(FileUploadEvent event) {

		// Do what you want with the file
		// Document document= new Document();
		try {

			// document.setLibelle(event.getFile().getFileName());
			// document.setContent(
			// IOUtils.toByteArray(event.getFile().getInputstream()));
			FileTransfertUtil.copyFile(event.getFile().getFileName(), event
					.getFile().getInputstream(), initBean.destination);
		} catch (IOException e) {
			e.printStackTrace();
		}

		// documentService.addDocument(document);

	}

	public List<Activite> getJoursException() {
		return joursException;
	}

	public void setJoursException(List<Activite> joursException) {
		this.joursException = joursException;
	}

	public List<Activite> getCongesException() {
		return congesException;
	}

	public void setCongesException(List<Activite> congesException) {
		this.congesException = congesException;
	}

	public String getNbJourSaisie() {
		return nbJourSaisie;
	}

	public void setNbJourSaisie(String nbJourSaisie) {
		this.nbJourSaisie = nbJourSaisie;
	}

	public String getNbCongesException() {
		return nbCongesException;
	}

	public void setNbCongesException(String nbCongesException) {
		this.nbCongesException = nbCongesException;
	}

	public String getNbJourException() {
		return nbJourException;
	}

	public void setNbJourException(String nbJourException) {
		this.nbJourException = nbJourException;
	}

	public CraService getCraService() {
		return craService;
	}

	public void setCraService(CraService craService) {
		this.craService = craService;
	}

	public UtilisateurService getUtilisateurService() {
		return utilisateurService;
	}

	public void setUtilisateurService(UtilisateurService utilisateurService) {
		this.utilisateurService = utilisateurService;
	}

	public AccueilBean getAccueilBean() {
		return accueilBean;
	}

	public void setAccueilBean(AccueilBean accueilBean) {
		this.accueilBean = accueilBean;
	}

	public void setDateCourante(Date dateCourante) {
		this.dateCourante = dateCourante;
	}

	public void setNbJour(Integer nbJour) {
		this.nbJour = nbJour;
	}

	public Date getDateCourante() {
		return dateCourante;
	}

	public List<Activite> getJours() {
		return jours;
	}

	public void setJours(List<Activite> jours) {
		this.jours = jours;
	}

	public Integer getNbJour() {
		return nbJour;
	}

	public Cra getCra() {
		return cra;
	}

	public void setCra(Cra cra) {
		this.cra = cra;
	}

	public CongesService getCongesService() {
		return congesService;
	}

	public void setCongesService(CongesService congesService) {
		this.congesService = congesService;
	}

	public AuthBean getAuthBean() {
		return authBean;
	}

	public void setAuthBean(AuthBean authBean) {
		this.authBean = authBean;
	}

	public File getFile() {
		return file;
	}

	public void setFile(File file) {
		this.file = file;
	}

	public List<Cra> getCras() {
		return cras;
	}

	public void setCras(List<Cra> cras) {
		this.cras = cras;
	}

	public boolean isAfficherCra() {
		return afficherCra;
	}

	public void setAfficherCra(boolean afficherCra) {
		this.afficherCra = afficherCra;
	}

	public List<Utilisateur> getUtilisateurs() {
		return utilisateurs;
	}

	public void setUtilisateurs(List<Utilisateur> utilisateurs) {
		this.utilisateurs = utilisateurs;
	}

}
