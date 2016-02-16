package batch;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Properties;

import org.apache.log4j.Logger;

public class Refresh {
	private static Logger logger = Logger.getLogger(Refresh.class);

	public static void refreshFile(String pathFile, Properties defaultProps)
			throws IOException {

		Process start = null;
		try {
			start = Runtime.getRuntime().exec(
					"wscript " + defaultProps.getProperty("executable.refresh")
							+ " " + pathFile.replace(" ", "~"));
			BufferedReader r = new BufferedReader(new InputStreamReader(
					start.getErrorStream()));
			String line = null;

			while ((line = r.readLine()) != null) {
				if ("1".equals(line)) {
					logger.error("Erreur  de mise à jour de "
							+ pathFile.replace(" ", "~"));
				}
				if ("1".equals(start.exitValue())) {
					logger.error("Erreur  de mise à jour de "
							+ pathFile.replace(" ", "~"));
				}
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			logger.error(
					"Erreur lors de l'execution du script de mise à jour de "
							+ pathFile.replace(" ", "~"), e);
		}

	}
}
