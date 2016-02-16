package com.adif.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.adif.model.Document;

@Component
@Transactional(readOnly = true)
public class DocumentService {

	@PersistenceContext(type = PersistenceContextType.EXTENDED)
	private EntityManager em;

	@Transactional(readOnly = false)
	public void addDocument(Document document) {
		if (document.getId() == 0) {
			em.persist(document);
		} else {
			em.merge(document);
		}

	}

	@Transactional(readOnly = false)
	public void deleteDocument(Document document) {
		em.remove(em.contains(document) ? document : em.merge(document));
	}

	public Document getDocumentById(int id) {
		return em.find(Document.class, id);
	}

	@SuppressWarnings("unchecked")
	public List<Document> findAllDocument() {
		List<Document> documents = em.createNamedQuery("findAllDocument")
				.getResultList();
		em.flush();
		em.clear();
		return documents;
	}

	// public Document LastDocument() {
	// //Document document =em.createQuery("select max(u.id) from Document u",
	// Document.class).getSingleResult();
	// return document;
	// }

}
