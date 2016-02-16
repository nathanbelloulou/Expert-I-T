package com.adif.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Entity
@NamedQueries({
		@NamedQuery(name = "filtreConges", query = "select u from Conges u where u.etat =:etat and u.utilisateur.id=:userId  "),
		@NamedQuery(name = "findAllConges", query = "select u from Conges u "),
		@NamedQuery(name = "findCongesIdDate", query = "select u from Conges u "
				+ "where u.utilisateur.id=:userId "
				+ "and u.etat=:etat "
				+ "and (((MONTH(u.fin)=MONTH(:date) and YEAR(u.fin)=YEAR(:date))or(MONTH(u.debut)=MONTH(:date) and YEAR(u.debut)=YEAR(:date))) or :date between u.debut and u.fin)") })
public class Conges implements Serializable, Statable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@NotNull
	@ManyToOne
	private Utilisateur utilisateur;
	@NotNull(message="La date de début de congés est obligatoire.")
	private Date debut;
	@NotNull(message="La date de fin de congés est obligatoire.")
	private Date fin;
	private Date dateCreation;
	private Date dateModification;
	@Min(0)
	private double nbJourCP;
	@Min(0)
	private double nbJourHS;
	@Min(0)
	private double nbJourRTT;
	@Enumerated(EnumType.STRING)
	private Etat etat;

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Override
	public Etat getEtat() {
		return etat;
	}

	@Override
	public void setEtat(Etat etat) {
		this.etat = etat;
	}

	public Date getDateModification() {
		return dateModification;
	}

	public void setDateModification(Date dateModification) {
		this.dateModification = dateModification;
	}

	public Date getDateCreation() {
		return dateCreation;
	}

	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}

	public Date getDebut() {
		return debut;
	}

	public void setDebut(Date mois) {
		debut = mois;
	}

	@Override
	public String toString() {
		return "Cra [id=" + id + ", mois=" + debut + ", dateCreation="
				+ dateCreation + ", dateModification=" + dateModification
				+ ", etat=" + etat + "]";
	}

	public Date getFin() {
		return fin;
	}

	public void setFin(Date fin) {
		this.fin = fin;
	}

	public double getNbJourCP() {
		return nbJourCP;
	}

	public void setNbJourCP(double nbJourCP) {
		this.nbJourCP = nbJourCP;
	}

	public double getNbJourHS() {
		return nbJourHS;
	}

	public void setNbJourHS(double nbJourHS) {
		this.nbJourHS = nbJourHS;
	}

	public double getNbJourRTT() {
		return nbJourRTT;
	}

	public void setNbJourRTT(double nbJourRTT) {
		this.nbJourRTT = nbJourRTT;
	}

}
