package com.adif.managed.bean;

import java.io.Serializable;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.adif.model.Message;
import com.adif.service.ClientService;
import com.adif.service.MessageService;

@Component
@Scope("session")
public class MessageBean implements Serializable {

	private static final long serialVersionUID = 1L;

	@Autowired
	private MessageService messageService;

	@Autowired
	private ClientService clientService;

	List<Message> messageList;

	private int idClient;

	private Message message;

	@PostConstruct
	private void init() {
		message = new Message();
		messageList = messageService.findAllMessage();

	}

	public void addMessage() {

		messageService.addMessage(message);

		messageList = messageService.findAllMessage();
	}

	public void deleteMessage(Message message) {

		messageService.deleteMessage(message);

		messageList = messageService.findAllMessage();
	}

	public void reset() {
		message = new Message();
	}

	public List<Message> getMessageList() {
		return messageList;
	}

	public void updateMessage() {

		messageList = messageService.findAllMessage();
	}

	public Message getMessage(int id) {

		return messageService.getMessageById(id);

	}

	public MessageService getMessageService() {
		return messageService;
	}

	public void setMessageService(MessageService messageService) {
		this.messageService = messageService;
	}

	public void setMessageList(List<Message> messageList) {
		this.messageList = messageList;
	}

	public Message getMessage() {
		return message;
	}

	public void setMessage(Message message) {
		this.message = message;
	}

	public ClientService getClientService() {
		return clientService;
	}

	public void setClientService(ClientService clientService) {
		this.clientService = clientService;
	}

	public int getIdClient() {
		return idClient;
	}

	public void setIdClient(int idClient) {
		this.idClient = idClient;
	}

}