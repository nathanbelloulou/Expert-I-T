package com.adif.utils;

import java.net.URL;
import java.net.URLClassLoader;
import java.nio.file.Paths;

import org.junit.Ignore;
import org.junit.Test;

import com.adif.managed.bean.InitBean;

public class FileTransfertUtilTest {

	@Test
	public void getDocument() {
		System.out.println(Paths.get("").toAbsolutePath().toString());
		new InitBean().initFile();
	}

	@Ignore
	@Test
	public void getClassPath() {
		// Get the System Classloader
		ClassLoader sysClassLoader = ClassLoader.getSystemClassLoader();

		// Get the URLs
		URL[] urls = ((URLClassLoader) sysClassLoader).getURLs();

		for (URL url : urls) {
			System.out.println(url.getFile());
		}

	}

}
