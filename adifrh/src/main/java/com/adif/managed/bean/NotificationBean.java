package com.adif.managed.bean;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.adif.model.Notification;
import com.adif.service.NotificationService;

@Component
@Scope("session")
public class NotificationBean implements Serializable {

	private static final long serialVersionUID = 1L;

	@Autowired
	private NotificationService notificationService;

	List<Notification> notificationList;

	private Notification notification;

	private int messageSelected;

	@PostConstruct
	private void init() {
		notification = new Notification();
		notificationList = notificationService.findAllNotification();

	}

	public void addNotification() {
		notification.setDate(new Date());

		notificationService.addNotification(notification);

		notificationList = notificationService.findAllNotification();
	}

	public void deleteNotification(Notification notification) {

		notificationService.deleteNotification(notification);

		notificationList = notificationService.findAllNotification();
	}

	public void reset() {
		notification = new Notification();
	}

	public List<Notification> getNotificationList() {
		return notificationList;
	}

	public Notification getNotification(int id) {

		return notificationService.getNotificationById(id);

	}

	public NotificationService getNotificationService() {
		return notificationService;
	}

	public void setNotificationService(NotificationService notificationService) {
		this.notificationService = notificationService;
	}

	public void setNotificationList(List<Notification> notificationList) {
		this.notificationList = notificationList;
	}

	public Notification getNotification() {
		return notification;
	}

	public void setNotification(Notification notification) {
		this.notification = notification;
	}

	public int getMessageSelected() {
		return messageSelected;
	}

	public void setMessageSelected(int messageSelected) {
		this.messageSelected = messageSelected;
	}

}