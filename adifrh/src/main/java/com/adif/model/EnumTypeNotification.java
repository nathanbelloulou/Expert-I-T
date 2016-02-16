package com.adif.model;

public enum EnumTypeNotification {
	CRA("Cra"), GLOBAL("Global"), SIMPLE("Simple");

	private final String libelle;

	EnumTypeNotification(String libelle) {

		this.libelle = libelle;
	}

	public String getLibelle() {
		return libelle;
	}

}