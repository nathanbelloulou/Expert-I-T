package com.adif.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.adif.model.Activite;

@Component
@Transactional(readOnly = true)
public class ActiviteService {

	@PersistenceContext(type = PersistenceContextType.EXTENDED)
	private EntityManager em;

	@Transactional(readOnly = false)
	public void addActivite(Activite activite) {

		if (activite.getId() == 0) {
			em.persist(activite);
		} else {
			em.merge(activite);
		}

	}

	@Transactional(readOnly = false)
	public void deleteActivite(Activite activite) {
		em.remove(em.contains(activite) ? activite : em.merge(activite));
	}

	public Activite getActiviteById(int id) {
		return em.find(Activite.class, id);
	}

	@SuppressWarnings("unchecked")
	public List<Activite> findAllConges() {
		List<Activite> activites = em.createNamedQuery("findAllConges")
				.getResultList();
		em.flush();
		em.clear();
		return activites;
	}

}
