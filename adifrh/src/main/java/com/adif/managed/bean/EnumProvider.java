package com.adif.managed.bean;

import java.io.Serializable;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.adif.model.TypeActivite;

@Component
@Scope("request")
public class EnumProvider implements Serializable {

	private static final long serialVersionUID = 1L;

	public TypeActivite[] getTypeActivite() {

		return TypeActivite.values();
	}

}
