package com.adif.model;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;

@Entity
@NamedQueries(value = {
		@NamedQuery(name = "findCraByDateId", query = "select c from Cra c where c.utilisateur.id=:userId and c.mois=:date"),
		@NamedQuery(name = "findCraByStateUser", query = "select c from Cra c where c.utilisateur.id=:userId and c.etat=:etat"),
		@NamedQuery(name = "findUser", query = "select u from Utilisateur u where u.abilitationAdministrateur=false and  not exists(select c.utilisateur from Cra c where  c.mois=:date)"),
		@NamedQuery(name = "findCraByDate", query = "select c from Cra c where c.mois=:date") })
public class Cra implements Serializable, Statable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@ManyToOne(fetch = FetchType.LAZY)
	private Utilisateur utilisateur;
	private Date mois;
	private Date dateCreation;
	private Date dateModification;
	@Enumerated(EnumType.ORDINAL)
	private Etat etat;

	@OneToMany(cascade = CascadeType.ALL)
	private Collection<Activite> activites;

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
	public void setEtat(Etat etatCra) {
		etat = etatCra;
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

	public Date getMois() {
		return mois;
	}

	public void setMois(Date mois) {
		this.mois = mois;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	@Override
	public String toString() {
		return "Cra [id=" + id + ", mois=" + mois + ", dateCreation="
				+ dateCreation + ", dateModification=" + dateModification
				+ ", etatCra=" + etat + ", activites=" + activites + "]";
	}

	public Collection<Activite> getActivites() {
		return activites;
	}

	public void setActivites(Collection<Activite> activites) {
		this.activites = activites;
	}

}
