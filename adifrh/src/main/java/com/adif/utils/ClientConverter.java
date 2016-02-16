package com.adif.utils;

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.convert.Converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.adif.service.ClientService;

@Component
@Scope("session")
public class ClientConverter implements Converter {
	@Autowired
	private ClientService clientService;

	@Override
	public Object getAsObject(FacesContext context, UIComponent component,
			String value) {
		return clientService.getClientById(Integer.valueOf(value));
	}

	@Override
	public String getAsString(FacesContext context, UIComponent component,
			Object value) {

		return ((Integer) value).toString();

	}

	// @Override
	// public Object getAsObject(FacesContext context, UIComponent component,
	// String value) {
	// // TODO Auto-generated method stub
	// return null;
	// }
	//
	// @Override
	// public String getAsString(FacesContext context, UIComponent component,
	// Object value) {
	// // TODO Auto-generated method stub
	// return null;
	// }
	//

}
