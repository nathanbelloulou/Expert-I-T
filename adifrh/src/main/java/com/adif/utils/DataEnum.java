package com.adif.utils;

import java.util.ArrayList;

import javax.annotation.PostConstruct;
import javax.faces.bean.ApplicationScoped;

import org.springframework.stereotype.Component;

import com.adif.model.Etat;
import com.adif.model.Utilisateur;

@Component
@ApplicationScoped
public class DataEnum {

	private ArrayList<Etat> etatAdmin;
	private ArrayList<Etat> etatUser;

	@PostConstruct
	public void init() {
		etatAdmin = new ArrayList<Etat>();
		etatUser = new ArrayList<Etat>();
		for (Etat etat : Etat.values()) {
			if (etat.isAdmin()) {
				etatAdmin.add(etat);
			}
			if (etat.isUser()) {
				etatUser.add(etat);
			}
		}

	}

	public Etat[] getEtatUtilisateur(Utilisateur utilisateur) {
		ArrayList<Etat> etts;
		if (utilisateur.isAbilitationAdministrateur()) {
			etts = etatAdmin;
		}
		etts = etatUser;
		return etts.toArray(new Etat[etts.size()]);

	}

	public Etat[] getEtats() {
		return Etat.values();

	}

}
