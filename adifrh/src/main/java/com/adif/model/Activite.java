package com.adif.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Activite implements Serializable {

	public Activite(Date date, TypeActivite type, CategorieActivite categorie) {
		super();
		this.date = date;
		this.setCategorie(categorie);
		this.setType(type);
	}

	public Activite() {

	}

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Temporal(TemporalType.DATE)
	private Date date;
	@Temporal(TemporalType.DATE)
	private Date dateCreation;
	private String value;
	@Enumerated(EnumType.ORDINAL)
	private TypeActivite type;
	@Enumerated(EnumType.ORDINAL)
	private CategorieActivite categorie;

	public static String getTra() {
		return "tra";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getDateCreation() {
		return dateCreation;
	}

	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public TypeActivite getType() {
		return type;
	}

	public void setType(TypeActivite type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "Activite [id=" + id + ", date=" + date + ", dateCreation="
				+ dateCreation + ", type=" + type + ", cra=" + "]";
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public CategorieActivite getCategorie() {
		return categorie;
	}

	public void setCategorie(CategorieActivite categorie) {
		this.categorie = categorie;
	}

}
