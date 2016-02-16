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
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@NamedQueries(value = {
		@NamedQuery(name = "findAllNotification", query = "select u from Notification u  "),
		@NamedQuery(name = "findAllNotificationUser", query = "select u from Notification u where u.utilisateur.id=:utilisateurId") })
public class Notification implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Temporal(TemporalType.DATE)
	private Date date;
	
	@Enumerated(EnumType.STRING)
	private EnumTypeNotification enumTypeNotification;
	
	@ManyToOne
	private Message message;

	@ManyToOne
	private Utilisateur utilisateur;

	private boolean visible;

	private boolean envoyer;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Message getMessage() {
		return message;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	public void setMessage(Message message) {
		this.message = message;
	}

	public boolean isVisible() {
		return visible;
	}

	public void setVisible(boolean visible) {
		this.visible = visible;
	}

	public boolean isEnvoyer() {
		return envoyer;
	}

	public void setEnvoyer(boolean envoyer) {
		this.envoyer = envoyer;
	}
	
	public EnumTypeNotification getEnumTypeNotification() {
		return enumTypeNotification;
	}
	
	public void setEnumTypeNotification(EnumTypeNotification enumTypeNotification) {
		this.enumTypeNotification = enumTypeNotification;
	}

}
