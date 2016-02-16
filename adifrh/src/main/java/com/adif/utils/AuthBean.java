package com.adif.utils;

import java.io.IOException;
import java.io.Serializable;

import javax.annotation.PostConstruct;
import javax.faces.FacesException;
import javax.faces.application.FacesMessage;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.faces.event.ComponentSystemEvent;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.hibernate.validator.constraints.NotEmpty;
import org.primefaces.context.RequestContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.adif.model.Statable;
import com.adif.model.Utilisateur;
import com.adif.service.UtilisateurService;

@Component
@Scope("session")
public class AuthBean implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private static final Logger LOG = Logger.getLogger(AuthBean.class);

	@NotEmpty(message = "L'identifiant utilisateur est obligatoire")
	private String username;
	@NotEmpty(message = "Le mot de passe est obligatoire")
	private String password;

	private String newpass;

	private String newpass2;

	private Utilisateur utilisateur;

	@Autowired
	UtilisateurService utilisateurService;

	@PostConstruct
	public void init() {

	}

	public String doLogout() {
		init();
		HttpSession session = (HttpSession) FacesContext.getCurrentInstance()
				.getExternalContext().getSession(false);
		session.invalidate();
		return "logoutSuccess";

	}

	public String dok() {
		System.out.println("nnj");
		return "logoutSuccess";

	}

	public String doLogin() {
		LOG.debug("Authentification user : " + username);

		setUtilisateur(utilisateurService.getUtilisateurByIdentifiant(username));

		if (utilisateur != null
				&& utilisateur.getMotpasse().equals(
						JsfUtils.encodeMD5(password))) {
			LOG.debug(username + " authentified");
			return "loginSuccess";
		}

		utilisateur = null;

		FacesContext
				.getCurrentInstance()
				.addMessage(
						null,
						new FacesMessage(
								FacesMessage.SEVERITY_INFO,
								"Identidiant ou le mot de passe est incorrecte. ",
								null));

		return "loginRetry";
	}

	public void isIdentifier(ComponentSystemEvent event) {
		if (utilisateur == null && !gestionAvecParametre()) {
			redirection("/login.xhtml");
			return;
		}
	}

	private boolean gestionAvecParametre() {

		HttpServletRequest lRequest = (HttpServletRequest) FacesContext
				.getCurrentInstance().getExternalContext().getRequest();
		username = lRequest.getParameter("utilisateur");
		password = lRequest.getParameter("mdp");

		if ("loginSuccess".equals(doLogin())) {
			return true;
		}

		return false;
	}

	public void redirection(String urla) {
		ExternalContext extContext = FacesContext.getCurrentInstance()
				.getExternalContext();

		String url = extContext.encodeActionURL(FacesContext
				.getCurrentInstance().getApplication().getViewHandler()
				.getActionURL(FacesContext.getCurrentInstance(), urla));

		try {
			extContext.redirect(url);
		} catch (IOException ioe) {
			throw new FacesException(ioe);
		}
	}

	public void enregistrerModification() {

		// modifcation du mot passe
		if (null != newpass && !newpass.isEmpty()) {

			if (newpass.equals(newpass2)) {
				utilisateur.setMotpasse(JsfUtils.encodeMD5(newpass));
			} else {
				RequestContext.getCurrentInstance().execute(
						"PF('dlgCompte').show();");
			}
		}

		try {
			utilisateurService.updateUtilisateur(utilisateur);
		}

		catch (Exception exception) {
			RequestContext.getCurrentInstance().execute(
					"PF('dlgCompte').show();");
		}
		FacesContext.getCurrentInstance().addMessage(
				null,
				new FacesMessage(FacesMessage.SEVERITY_INFO,
						"Enregistrer des Modification utilisateur:",
						"réalisée avec succès"));

	}

	public boolean afficher(Statable s, String d) {
		boolean admin = getUtilisateur().isAbilitationAdministrateur();
		if (s == null) {
			return false;
		}

		if (s.getEtat().getSuivant() == null) {
			return false;

		}

		if ("".equals(d)
				&& (admin && s.getEtat().isAdmin() || !admin
						&& s.getEtat().isUser())) {
			return true;
		} else if (s.getEtat().isModifier()
				&& "modifier".equals(d)
				&& (admin && s.getEtat().isAdmin() || !admin
						&& s.getEtat().isUser())) {
			return true;
		} else if (s.getEtat().isSupprimer()
				&& "supprimer".equals(d)
				&& (admin && s.getEtat().isAdmin() || !admin
						&& s.getEtat().isUser())) {
			return true;
		}

		return false;
	}

	public Statable etatSuivant(Statable conges) {

		conges.setEtat(conges.getEtat().getSuivant());
		return conges;

	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String aUsername) {
		username = aUsername;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String aPassword) {
		password = aPassword;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	public String getNewpass() {
		return newpass;
	}

	public void setNewpass(String newpass) {
		this.newpass = newpass;
	}

	public String getNewpass2() {
		return newpass2;
	}

	public void setNewpass2(String newpass2) {
		this.newpass2 = newpass2;
	}

	public String converterTailleFichier(String lenght) {
		Integer s;

		try {
			s = Integer.decode(lenght);

		} catch (Exception e) {
			return "";
		}
		if (s < 1024) {
			return s + " octet";
		} else if (s > 1024 & s < 1024 * 1024) {
			return s / 1024 + " Ko";
		} else if (s > 1024 * 1024) {
			return s / (1024 * 1024) + " Mo";
		}

		return "";
	}

}
