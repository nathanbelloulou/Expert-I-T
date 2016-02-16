package com.adif.service;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.adif.model.Message;

@Component
@Transactional(readOnly = true)
public class MessageService {

	private static final Logger LOG = Logger.getLogger(MessageService.class);

	@PersistenceContext(type = PersistenceContextType.EXTENDED)
	private EntityManager em;

	@Transactional(readOnly = false)
	public Message addMessage(Message message) {
		if (message.getId() == 0) {
			em.persist(message);
		} else {
			em.merge(message);
		}
		em.refresh(message);
		return message;
	}

	@Transactional(readOnly = false)
	public Message updateMessage(Message message) {
		if (message.getId() != 0) {

			return em.merge(message);
		}

		return message;
	}

	@Transactional(readOnly = false)
	public void deleteMessage(Message message) {
		em.remove(em.contains(message) ? message : em.merge(message));
	}

	public Message getMessageById(int id) {
		return em.find(Message.class, id);
	}

	@SuppressWarnings("unchecked")
	public List<Message> findAllMessage() {
		List<Message> messages = em.createNamedQuery("findAllMessage")
				.getResultList();
		em.flush();
		em.clear();
		return messages;
	}

	public Message construireMessageOuvertureCra(Date date) {

		LOG.debug("Construction des messages");
		return new Message();
	}

}
