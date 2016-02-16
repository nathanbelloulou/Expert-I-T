package com.adif.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.adif.model.Client;

@Component
@Transactional(readOnly = true)
public class ClientService {

	@PersistenceContext(type = PersistenceContextType.EXTENDED)
	private EntityManager em;

	@Transactional(readOnly = false)
	public void addClient(Client client) {
		em.persist(client);

	}

	@Transactional(readOnly = false)
	public void updateClient(Client client) {
		em.merge(client);
	}

	@Transactional(readOnly = false)
	public void deleteClient(Client client) {
		em.remove(em.contains(client) ? client : em.merge(client));
	}

	public Client getClientById(int id) {
		return em.find(Client.class, id);
	}

	@SuppressWarnings("unchecked")
	public List<Client> findAllClient() {
		List<Client> clients = em.createNamedQuery("findAllClient")
				.getResultList();

		return clients;
	}

}
