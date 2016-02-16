package com.adif.managed.bean;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;

import org.primefaces.event.SelectEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.adif.model.JourOff;
import com.adif.service.JourOffService;

@Component
@Scope("session")
public class JourOffBean implements Serializable {

	private static final long serialVersionUID = 1L;

	@Autowired
	private JourOffService jourOffService;

	List<JourOff> jourOffList;

	private JourOff jourOff;

	@PostConstruct
	private void init() {
		jourOff = new JourOff();
		jourOffList = jourOffService.findAllJourOffYear(new Date());

	}

	public void addJourOff() {

		jourOffService.addJourOff(jourOff);

		jourOffList = jourOffService.findAllJourOffYear(new Date());
		jourOff = new JourOff();
	}

	public void updateJourOff() {

		jourOffService.updateJourOff(jourOff);

		jourOffList = jourOffService.findAllJourOffYear(new Date());
	}

	public void deleteJourOff(JourOff jourOffa) {

		jourOffService.deleteJourOff(jourOffa);

		jourOffList = jourOffService.findAllJourOffYear(new Date());
	}

	public void onRowSelect(SelectEvent event) {
		jourOff = (JourOff) event.getObject();

	}

	public void reset() {
		jourOff = new JourOff();
	}

	public List<JourOff> getJourOffList() {
		return jourOffList;
	}

	public JourOff getJourOff(int id) {

		return jourOffService.getJourOffById(id);

	}

	public JourOffService getJourOffService() {
		return jourOffService;
	}

	public void setJourOffService(JourOffService jourOffService) {
		this.jourOffService = jourOffService;
	}

	public void setJourOffList(List<JourOff> jourOffList) {
		this.jourOffList = jourOffList;
	}

	public JourOff getJourOff() {
		return jourOff;
	}

	public void setJourOff(JourOff jourOff) {
		this.jourOff = jourOff;
	}

}