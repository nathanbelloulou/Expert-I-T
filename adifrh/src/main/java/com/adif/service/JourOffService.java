package com.adif.service;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.adif.model.JourOff;

@Component
@Transactional(readOnly = true)
public class JourOffService {

	@PersistenceContext(type = PersistenceContextType.EXTENDED)
	private EntityManager em;

	@Transactional(readOnly = false)
	public void addJourOff(JourOff jourOff) {
		em.persist(jourOff);

	}

	@Transactional(readOnly = false)
	public void updateJourOff(JourOff jourOff) {
		em.merge(jourOff);
	}

	@Transactional(readOnly = false)
	public void deleteJourOff(JourOff jourOff) {
		em.remove(em.contains(jourOff) ? jourOff : em.merge(jourOff));
	}

	public JourOff getJourOffById(int id) {
		return em.find(JourOff.class, id);
	}

	@SuppressWarnings("unchecked")
	public List<JourOff> findAllJourOffYear(Date date) {
		List<JourOff> jourOffs = em.createNamedQuery("findAllJourOff")
				.getResultList();

		return jourOffs;
	}

}
