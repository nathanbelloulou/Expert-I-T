package com.adif.model;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;

@Entity
@NamedQueries({
		@NamedQuery(name = "UtilisateurByIdentifiant", query = "select u from Utilisateur u where u.identifiant = :identifiant"),
		@NamedQuery(name = "FindAllUtilisateurs", query = "select u from Utilisateur u ") })
public class Utilisateur implements Serializable {

	@Override
	public String toString() {
		return "Utilisateur [id=" + id + ", nom=" + nom + ", prenom=" + prenom
				+ ", identifiant=" + identifiant + ", motpasse=" + motpasse
				+ ", email=" + email + "]";
	}

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Size(min = 2, max = 50, message = "Le nom de l'utilisateur doit être entre 2 et 50 caractères")
	private String nom;
	@Size(min = 2, max = 50, message = "Le prénom de l'utilisateur doit être entre 2 et 50 caractères")
	@NotEmpty
	private String prenom;
	private String identifiant;
	private String motpasse;
	@Email
	@NotEmpty
	private String email;
	@ManyToOne
	private Client client;
	private boolean abilitationAdministrateur;
	private Date dateActivation;
	@OneToMany
	private Collection<Conges> conges;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getMotpasse() {
		return motpasse;
	}

	public void setMotpasse(String password) {
		motpasse = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getIdentifiant() {
		return identifiant;
	}

	public void setIdentifiant(String identifiant) {
		this.identifiant = identifiant;
	}

	public boolean isAbilitationAdministrateur() {
		return abilitationAdministrateur;
	}

	public void setAbilitationAdministrateur(boolean abilitationAdministrateur) {
		this.abilitationAdministrateur = abilitationAdministrateur;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public Date getDateActivation() {
		return dateActivation;
	}

	public void setDateActivation(Date dateActivation) {
		this.dateActivation = dateActivation;
	}

	public Collection<Conges> getConges() {
		return conges;
	}

	public void setConges(Collection<Conges> conges) {
		this.conges = conges;
	}
}
