package com.adif.managed.bean;

import java.io.Serializable;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.component.UIInput;
import javax.faces.context.FacesContext;
import javax.faces.event.ComponentSystemEvent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.adif.model.Conges;
import com.adif.model.Etat;
import com.adif.service.CongesService;
import com.adif.service.UtilisateurService;
import com.adif.utils.AuthBean;
import com.adif.utils.DateUtil;

@Component
@Scope("session")
public class CongesBean implements Serializable {

	private static final long serialVersionUID = 1L;

	@Autowired
	private CongesService congesService;
	@Autowired
	private AuthBean authBean;
	@Autowired
	private UtilisateurService utilisateurService;

	List<Conges> congesList;

	private boolean dbtDemi;
	private boolean finDemi;
	private boolean repartir;
	private Conges conges;
	private double nbJourEffectif;
	private Etat filtreEtat;
	private Integer filtreUtilisateurId;

	@PostConstruct
	private void init() {
		conges = new Conges();
		if (!authBean.getUtilisateur().isAbilitationAdministrateur()) {
			filtreUtilisateurId = authBean.getUtilisateur().getId();
		}
		filtre();

	}

	public void filtre() {

		congesList = congesService.filtre(filtreUtilisateurId, filtreEtat);

	}

	public void validate(ComponentSystemEvent event) {

		FacesContext fc = FacesContext.getCurrentInstance();

		UIComponent components = event.getComponent();

		// get password
		UIInput uiInputPassword = (UIInput) components.findComponent("HS");
		String password = uiInputPassword.getLocalValue() == null ? ""
				: uiInputPassword.getLocalValue().toString();
		String passwordId = uiInputPassword.getClientId();

		// get confirm password
		UIInput uiInputConfirmPassword = (UIInput) components
				.findComponent("confirmPassword");
		String confirmPassword = uiInputConfirmPassword.getLocalValue() == null ? ""
				: uiInputConfirmPassword.getLocalValue().toString();

		// Let required="true" do its job.
		if (password.isEmpty() || confirmPassword.isEmpty()) {
			return;
		}

		if (!password.equals(confirmPassword)) {

			FacesMessage msg = new FacesMessage(
					"Password must match confirm password");
			msg.setSeverity(FacesMessage.SEVERITY_ERROR);
			fc.addMessage(passwordId, msg);
			fc.renderResponse();

		}

	}

	public void addConges() {
		conges.setUtilisateur(authBean.getUtilisateur());
		if (nbJourEffectif != conges.getNbJourCP() + conges.getNbJourHS()
				+ conges.getNbJourRTT()) {
			FacesContext.getCurrentInstance().addMessage(
					"messageConges",
					new FacesMessage(FacesMessage.SEVERITY_WARN,
							"Veuillez affecter vos congés. ", null));
			return;
		}

		congesService.addConges(conges);
		FacesContext.getCurrentInstance().addMessage(
				null,
				new FacesMessage(FacesMessage.SEVERITY_INFO,
						"Congés enregistrer. ", null));
		init();
	}

	public void updateConges(Conges congesUp) {

		congesService.updateConges(congesUp);

		init();
	}

	public void deleteConges(Conges congesa) {

		congesService.deleteConges(congesa);

		congesList = congesService.findAllConges();
	}

	public void nbjourCongesEffectif() {
		double nbConges = 0;

		if (conges.getDebut().after(conges.getFin())) {
			FacesContext
					.getCurrentInstance()
					.addMessage(
							"messageConges",
							new FacesMessage(
									FacesMessage.SEVERITY_WARN,
									"La date de début de congés doit être inférieur à la date de fin. ",
									null));
		}
		List<Date> dates = DateUtil.getDatesIntervale(conges.getDebut(),
				conges.getFin());
		// TODO supprimer de la liste des dates de jours feries
		Calendar c = Calendar.getInstance();
		for (Date dat : dates) {
			c.setTime(dat);
			if (c.get(Calendar.DAY_OF_WEEK) != 1
					&& c.get(Calendar.DAY_OF_WEEK) != 7) {
				nbConges = nbConges + 1;
			}

		}
		if (dbtDemi) {
			nbConges = nbConges - 0.5;
		}
		if (finDemi) {
			nbConges = nbConges - 0.5;
		}

		if (nbConges <= 0) {
			FacesContext.getCurrentInstance().addMessage(
					"messageConges",
					new FacesMessage(FacesMessage.SEVERITY_WARN,
							"Veulliez saisir une période supérieur. ", null));
			nbConges = 0;
		}

		nbJourEffectif = nbConges;

	}

	public void reset() {
		conges = new Conges();
		nbJourEffectif = 0;
		repartir = false;
	}

	public boolean AfficherEnregistrer() {
		if (conges.getNbJourCP() + conges.getNbJourHS() + conges.getNbJourRTT() == nbJourEffectif) {
			return true;
		}
		return false;
	}

	public List<Conges> getCongesList() {
		return congesList;
	}

	public Conges getConges(int id) {

		return congesService.getCongesById(id);

	}

	public CongesService getCongesService() {
		return congesService;
	}

	public void setCongesService(CongesService congesService) {
		this.congesService = congesService;
	}

	public void setCongesList(List<Conges> congesList) {
		this.congesList = congesList;
	}

	public void etatSuivant(Conges conges) {

		conges.setEtat(conges.getEtat().getSuivant());
		congesService.updateConges(conges);
		init();

	}

	public Conges getConges() {
		return conges;
	}

	public void setConges(Conges conges) {
		this.conges = conges;
	}

	public UtilisateurService getUtilisateurService() {
		return utilisateurService;
	}

	public void setUtilisateurService(UtilisateurService utilisateurService) {
		this.utilisateurService = utilisateurService;
	}

	public boolean isDbtDemi() {
		return dbtDemi;
	}

	public void setDbtDemi(boolean dbtDemi) {
		this.dbtDemi = dbtDemi;
	}

	public boolean isFinDemi() {
		return finDemi;
	}

	public void setFinDemi(boolean finDemi) {
		this.finDemi = finDemi;
	}

	public double getNbJourEffectif() {
		return nbJourEffectif;
	}

	public void setNbJourEffectif(double nbJourEffectif) {
		this.nbJourEffectif = nbJourEffectif;
	}

	public Etat getFiltreEtat() {
		return filtreEtat;
	}

	public void setFiltreEtat(Etat filtreEtat) {
		this.filtreEtat = filtreEtat;
	}

	public Integer getFiltreUtilisateurId() {
		return filtreUtilisateurId;
	}

	public void setFiltreUtilisateurId(Integer filtreUtilisateurId) {
		this.filtreUtilisateurId = filtreUtilisateurId;
	}

	public boolean isRepartir() {
		return repartir;
	}

	public void setRepartir(boolean repartir) {
		this.repartir = repartir;
	}

}