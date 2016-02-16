package com.adif.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;
import javax.persistence.Query;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.adif.model.Conges;
import com.adif.model.Etat;
import com.adif.utils.DateUtil;

@Component
@Transactional(readOnly = true)
public class CongesService {

	@PersistenceContext(type = PersistenceContextType.EXTENDED)
	private EntityManager em;

	@Transactional(readOnly = false)
	public void addConges(Conges conges) {
		conges.setEtat(Etat.ENREGISTRER);
		

		em.persist(conges);

	}


	@Transactional(readOnly = false)
	public void updateConges(Conges conges) {
		em.merge(conges);

	}

	@Transactional(readOnly = false)
	public void deleteConges(Conges conges) {
		em.remove(em.contains(conges) ? conges : em.merge(conges));
	}

	public Conges getCongesById(int id) {
		return em.find(Conges.class, id);
	}

	@SuppressWarnings("unchecked")
	public List<Conges> findAllConges() {
		List<Conges> congess = em.createNamedQuery("findAllConges")
				.getResultList();

		return congess;
	}

	/*
	 * requete complexe qui recherche si la date fait partie d'un congés
	 */
	@SuppressWarnings("unchecked")
	public List<Conges> findCongesIdDate(Integer userId, Date date) {
		Query query = em.createNamedQuery("findCongesIdDate");
		query.setParameter("userId", userId);
		query.setParameter("date", date);
		query.setParameter("etat", Etat.ENREGISTRER);
		List<Conges> congess = query.getResultList();
		return congess;
	}

	public HashSet<Date> dateConges(Integer userId, Date date) {
		List<Conges> conges = findCongesIdDate(userId, date);
		HashSet<Date> actConges = new HashSet<Date>();
		List<Date> dates = new ArrayList<Date>();
		if (conges != null) {
			for (Conges conges2 : conges) {

				dates = DateUtil.getDatesIntervale(conges2.getDebut(),
						conges2.getFin());
				for (Date date2 : dates) {
					actConges.add(date2);
				}
			}

		}
		return actConges;
	}

	public List<Conges> filtre(Integer filtreUtilisateurId, Etat filtreEtat) {
		if (filtreUtilisateurId != null && filtreUtilisateurId == 0) {
			filtreUtilisateurId = null;
		}
		String query = "select u from Conges u ";
		if (filtreUtilisateurId != null || filtreEtat != null) {
			query = query + "where";
		}
		if (filtreUtilisateurId != null) {
			query = query + " u.utilisateur.id = " + filtreUtilisateurId;
		}
		if (filtreUtilisateurId != null && filtreEtat != null) {
			query = query + " and ";
		}
		if (filtreEtat != null) {
			query = query + " u.etat = '" + filtreEtat.name() + "'";
		}

		System.out.println(query);
		return em.createQuery(query, Conges.class).setMaxResults(20)
				.getResultList();

	}

}
