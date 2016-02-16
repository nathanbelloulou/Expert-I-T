package com.adif.managed.bean;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.adif.utils.AuthBean;

@Component
@Scope("session")
public class NavigationBean {

	@Autowired
	private AuthBean authBean;

	@Autowired
	private UtilisateurBean utilisateurBean;

	private String menuActif, titre;

	@PostConstruct
	public void init() {

		menuActif = "accueil";

	}

	public String getMenuActif() {
		return menuActif;
	}

	public void setMenuActif(String menuActif) {

		if ("administration".equals(menuActif)) {
			utilisateurBean.init();
		}

		this.menuActif = menuActif;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

}
