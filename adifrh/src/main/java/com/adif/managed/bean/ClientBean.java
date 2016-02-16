package com.adif.managed.bean;

import java.io.Serializable;
import java.util.List;

import javax.annotation.PostConstruct;

import org.primefaces.event.SelectEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.adif.model.Client;
import com.adif.service.ClientService;

@Component
@Scope("session")
public class ClientBean implements Serializable {

	private static final long serialVersionUID = 1L;

	@Autowired
	private ClientService clientService;

	List<Client> clientList;

	private Client client;

	@PostConstruct
	private void init() {
		client = new Client();
		clientList = clientService.findAllClient();

	}

	public void addClient() {

		clientService.addClient(client);

		clientList = clientService.findAllClient();
	}

	public void updateClient() {

		clientService.updateClient(client);

		clientList = clientService.findAllClient();
	}

	public void deleteClient(Client clienta) {

		clientService.deleteClient(clienta);

		clientList = clientService.findAllClient();
	}

	public void onRowSelect(SelectEvent event) {
		client = (Client) event.getObject();

	}

	public void reset() {
		client = new Client();
	}

	public List<Client> getClientList() {
		return clientList;
	}

	public Client getClient(int id) {

		return clientService.getClientById(id);

	}

	public ClientService getClientService() {
		return clientService;
	}

	public void setClientService(ClientService clientService) {
		this.clientService = clientService;
	}

	public void setClientList(List<Client> clientList) {
		this.clientList = clientList;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

}