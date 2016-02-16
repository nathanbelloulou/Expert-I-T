package com.adif.service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashSet;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.adif.model.Activite;
import com.adif.model.CategorieActivite;
import com.adif.model.Cra;
import com.adif.model.Etat;
import com.adif.model.TypeActivite;
import com.adif.model.Utilisateur;
import com.adif.utils.DateUtil;

@Component
@Transactional(readOnly = true)
public class CraService {

	@PersistenceContext(type = PersistenceContextType.EXTENDED)
	private EntityManager em;

	@Autowired
	private CongesService congesService;

	@Transactional(readOnly = false)
	public void addCra(Cra cra) {
		if (cra.getId() == 0) {
			cra.setMois(getFirstDateOfCurrentMonth(cra.getMois()));
			cra.setDateCreation(new Date());
			cra.setDateModification(new Date());

			em.persist(cra);
		} else {
			updateCra(cra);
		}
	}

	public List<Cra> ouvrirCra(Date dateCourante) {
		Cra nouveauCra = null;
		List<Cra> cras = new ArrayList<Cra>();
		List<Utilisateur> utilisateurs = rechercherUtilisateurSansCra(dateCourante);
		for (Utilisateur utilisateur : utilisateurs) {

			nouveauCra = new Cra();
			HashSet<Date> actConges = congesService.dateConges(
					utilisateur.getId(), dateCourante);
			List<Activite> acts = new ArrayList<Activite>(activites(
					dateCourante, actConges, TypeActivite.ACTIVITE));
			acts.addAll(activites(dateCourante, actConges, TypeActivite.CONGES));
			acts.addAll(activites(dateCourante, actConges,
					TypeActivite.ACTIVITEX));
			nouveauCra.setActivites(acts);
			nouveauCra.setMois(dateCourante);
			nouveauCra.setEtat(Etat.OUVERT);
			nouveauCra.setUtilisateur(utilisateur);

			addCra(nouveauCra);
			cras.add(nouveauCra);

		}

		return cras;

	}

	public List<Activite> activites(Date date, HashSet<Date> actConges,
			TypeActivite type) {
		List<Activite> activiti = new ArrayList<Activite>();
		List<Date> dates = DateUtil.createMonthLabels(date);
		Calendar c = Calendar.getInstance();
		for (Date dat : dates) {
			c.setTime(dat);
			if (c.get(Calendar.DAY_OF_WEEK) == 1
					|| c.get(Calendar.DAY_OF_WEEK) == 7) {

				activiti.add(new Activite(dat, type, CategorieActivite.WKD));
			} else if (actConges.contains(dat)) {
				activiti.add(new Activite(dat, type, CategorieActivite.CONGES));
			} else {

				activiti.add(new Activite(dat, type, CategorieActivite.ACTIF));

			}
		}
		return activiti;
	}

	@Transactional(readOnly = false)
	public void updateCra(Cra cra) {
		cra.setDateModification(new Date());
		em.merge(cra);

	}

	@Transactional(readOnly = false)
	public void deleteCra(Cra cra) {
		em.remove(em.contains(cra) ? cra : em.merge(cra));
	}

	public Cra getCraById(int id) {
		return em.find(Cra.class, id);
	}

	public Cra findCraByDateId(Date date, Integer userId) {
		try {
			Query query = em.createNamedQuery("findCraByDateId");
			query.setParameter("date", getFirstDateOfCurrentMonth(date));
			query.setParameter("userId", userId);
			query.setMaxResults(1);
			return (Cra) query.getSingleResult();

		} catch (NoResultException e) {
			return null;
		}

	}

	@SuppressWarnings("unchecked")
	public List<Cra> findCraByDate(Date date) {
		try {
			Query query = em.createNamedQuery("findCraByDate");
			query.setParameter("date", getFirstDateOfCurrentMonth(date));
			return query.getResultList();

		} catch (NoResultException e) {
			return null;
		}

	}

	public List<Cra> filtre(Integer filtreUtilisateurId, Etat filtreEtat) {
		if (filtreUtilisateurId != null && filtreUtilisateurId == 0) {
			filtreUtilisateurId = null;
		}
		String query = "select u from Cra u ";
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
		return em.createQuery(query, Cra.class).setMaxResults(20)
				.getResultList();

	}

	private Date getFirstDateOfCurrentMonth(Date date) {

		Calendar cal = Calendar.getInstance();
		cal.setTime(date);

		cal.set(Calendar.DAY_OF_MONTH,
				Calendar.getInstance().getActualMinimum(Calendar.DAY_OF_MONTH));
		cal.set(Calendar.HOUR_OF_DAY, 0);
		cal.set(Calendar.MINUTE, 0);
		cal.set(Calendar.SECOND, 0);
		cal.set(Calendar.MILLISECOND, 0);
		System.out.println(cal.getTime());
		return cal.getTime();

	}

	@SuppressWarnings("unchecked")
	public List<Utilisateur> rechercherUtilisateurSansCra(Date dateCourante) {
		Query query = em.createNamedQuery("findUser");
		query.setParameter("date", getFirstDateOfCurrentMonth(dateCourante));
		return query.getResultList();

	}

}
