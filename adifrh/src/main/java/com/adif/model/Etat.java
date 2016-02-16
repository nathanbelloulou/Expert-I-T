package com.adif.model;

public enum Etat {
	VALIDER(true, true, true, false, null, "Valider"), TRANSMIS(false, true,
			true, false, VALIDER, "Transmettre"), ENREGISTRER(true, false,
			true, true, TRANSMIS, "Enregistrer"), OUVERT(true, false, true,
			true, ENREGISTRER, "Ouvert");

	private final boolean admin;
	private final boolean user;
	private final String libelle;
	private final Etat suivant;
	private final boolean supprimer;
	private final boolean modifier;

	Etat(boolean user, boolean admin, boolean modifier, boolean supprimer,
			Etat suiv, String libelle) {
		this.user = user;
		this.admin = admin;
		suivant = suiv;
		this.libelle = libelle;
		this.modifier = modifier;
		this.supprimer = supprimer;
	}

	public String getLibelle() {
		return libelle;
	}

	public Etat getSuivant() {
		return suivant;
	}

	public boolean isAdmin() {
		return admin;
	}

	public boolean isUser() {
		return user;
	}

	public boolean isSupprimer() {
		return supprimer;
	}

	public boolean isModifier() {
		return modifier;
	}
}
