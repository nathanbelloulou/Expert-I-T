package com.adif.service;

import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.adif.model.Utilisateur;
import com.adif.utils.JsfUtils;

@Component
@Transactional(readOnly = true)
public class UtilisateurService {

	private static final Logger LOG = Logger
			.getLogger(UtilisateurService.class);

	@PersistenceContext(type = PersistenceContextType.EXTENDED)
	private EntityManager em;

	@Transactional(readOnly = false)
	public void addUtilisateur(Utilisateur utilisateur) {
		if (utilisateur != null && utilisateur.getMotpasse() != null) {
			if (utilisateur.getMotpasse() == null) {
				utilisateur.setMotpasse("adif");
			}
			utilisateur.setMotpasse(JsfUtils.encodeMD5(utilisateur
					.getMotpasse()));
		}
		em.persist(utilisateur);
	}

	@Transactional(readOnly = false)
	public Utilisateur updateUtilisateur(Utilisateur utilisateur) {

		return em.merge(utilisateur);
	}

	@Transactional(readOnly = false)
	public void deleteUtilisateur(Utilisateur utilisateur) {
		em.remove(em.contains(utilisateur) ? utilisateur : em
				.merge(utilisateur));
	}

	public Utilisateur getUtilisateurById(int id) {
		return em.find(Utilisateur.class, id);
	}

	public Utilisateur getUtilisateurByIdentifiant(String identifiant) {
		Utilisateur user = null;
		try {

			user = (Utilisateur) em
					.createNamedQuery("UtilisateurByIdentifiant")
					.setParameter("identifiant", identifiant).getSingleResult();
		} catch (javax.persistence.NoResultException e) {
			LOG.info(" Pas d'utilisateur");
		}
		return user;

	}

	@SuppressWarnings("unchecked")
	public List<Utilisateur> findAll() {
		List<Utilisateur> utilisateurs = em.createNamedQuery(
				"FindAllUtilisateurs").getResultList();
		em.flush();
		em.clear();
		return utilisateurs;
	}

	private final SecureRandom random = new SecureRandom();

	public String nextSessionId() {
		return new BigInteger(130, random).toString(10);
	}

	public void test() {
		// TODO Auto-generated method stub

	}

}
