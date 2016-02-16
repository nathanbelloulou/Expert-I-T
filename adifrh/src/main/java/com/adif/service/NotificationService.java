package com.adif.service;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.adif.model.Cra;
import com.adif.model.Notification;
import com.adif.model.Utilisateur;

@Component
@Transactional(readOnly = true)
public class NotificationService {

	@PersistenceContext(type = PersistenceContextType.EXTENDED)
	private EntityManager em;

	@Autowired
	private MessageService messageService;

	@Transactional(readOnly = false)
	public void addNotification(Notification notification) {

		if (notification.getId() == 0) {
			em.persist(notification);
		}

	}

	@Transactional(readOnly = false)
	public void deleteNotification(Notification notification) {
		em.remove(em.contains(notification) ? notification : em
				.merge(notification));
	}

	public Notification getNotificationById(int id) {
		return em.find(Notification.class, id);
	}

	@SuppressWarnings("unchecked")
	public List<Notification> findAllNotification() {
		List<Notification> notifications = em.createNamedQuery(
				"findAllNotification").getResultList();
		em.flush();
		em.clear();
		return notifications;
	}

	@SuppressWarnings("unchecked")
	public List<Notification> findAllNotificationUser(Utilisateur utilisateur) {
		Query query = em.createNamedQuery("findAllNotificationUser");
		query.setParameter("utilisateurId", utilisateur.getId());
		return query.getResultList();
	}

	public List<Notification> notifierSaisirCra(List<Cra> cras) {
		for (Cra cra : cras) {

			Notification notification = new Notification();
			notification.setUtilisateur(cra.getUtilisateur());
			notification.setMessage(messageService
					.construireMessageOuvertureCra(cra.getMois()));
			notification.setDate(new Date());
			addNotification(notification);
		}

		return null;

	}

	public void notifier(Utilisateur utilisateur, String string, boolean b) {
		// TODO Auto-generated method stub

	}

}
