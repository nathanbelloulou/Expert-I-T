package com.adif.managed.bean;

import java.io.Serializable;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.adif.model.Notification;
import com.adif.service.NotificationService;

@Component
@Scope("request")
public class RequestBean implements Serializable {

	/**
	 * 
	 * 
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Autowired
	private NotificationService notificationService;

	private List<Notification> notifications;

	@PostConstruct
	public void init() {
		notifications = notificationService.findAllNotification();
	}

	public NotificationService getNotificationService() {
		return notificationService;
	}

	public void setNotificationService(NotificationService notificationService) {
		this.notificationService = notificationService;
	}

	public List<Notification> getNotifications() {
		return notifications;
	}

	public void setNotifications(List<Notification> notifications) {
		this.notifications = notifications;
	}

}
