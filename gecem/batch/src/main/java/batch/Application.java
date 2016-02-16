package batch;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.log4j.Logger;

public class Application {
	private static Logger logger = Logger.getLogger(Application.class);
	static Properties defaultProps;

	public static void main(String[] args) throws IOException {
		defaultProps = new Properties();
		FileInputStream in;
		try {
			in = new FileInputStream(args[0]);
			defaultProps.load(in);
		} catch (IOException e) {
			e.printStackTrace();
		}
		logger.info("********************************* Batch Gecem *******************************************");
		new Application();
		Path repertoireParent = Paths.get(defaultProps
				.getProperty("repertoire"));
		logger.info("Recherche des laboratoires et études à traiter.");
		List<File> laboratoires = listLaboratoireWeb(repertoireParent.toFile());
		List<File> etudes = listEtudesWeb(laboratoires);
		logger.info(etudes.size() + " etudes trouvées.");

		for (File etude : etudes) {
			Path reporting = Paths.get(etude.getAbsoluteFile() + "\\"
					+ defaultProps.getProperty("reporting"));
			if ("all".equals(defaultProps.getProperty("execute.refresh"))
					|| etude.getName().equals(
							defaultProps.getProperty("execute.refresh"))) {
				logger.info("Début  de la mise à jour de l'étude:"
						+ etude.getName());

				for (File ex : reporting.toFile().listFiles()) {

					Refresh.refreshFile(ex.getAbsolutePath(), defaultProps);
				}
				logger.info("Fin de la mise à jour de l'étude "
						+ etude.getName());
			}
			if ("all".equals(defaultProps.getProperty("execute.transfert"))
					|| etude.getName().equals(
							defaultProps.getProperty("execute.transfert"))) {
				FtpGecem ftpGecem = new FtpGecem();
				logger.info("Transfert des fichiers reporting "
						+ etude.getName());
				ftpGecem.sendFtpClient(etude.getParentFile().getName(),
						etude.getName(), reporting.toFile().listFiles(),
						defaultProps);
				logger.info("Fin de transfert des fichiers reporting "
						+ etude.getName());

			}
		}

		if ("true".equals(defaultProps.getProperty("execute.update"))) {
			logger.info("Mise à jour de l'intranet");
			CloseableHttpClient httpclient = HttpClients.createDefault();
			HttpGet httpGet = new HttpGet(
					defaultProps.getProperty("lien.update.intranet"));

			try {
				httpclient.execute(httpGet);
			} catch (IOException e) {
				logger.error(
						"impossible de joindre "
								+ defaultProps
										.getProperty("lien.update.intranet"), e);
			}
		}
	}

	private static List<File> listEtudesWeb(List<File> laboratoires)
			throws IOException {

		List<File> etudes = new ArrayList<>();
		logger.info("Recherche des Etudes");

		for (final File laboratoire : laboratoires) {
			for (final File etude : laboratoire.listFiles()) {
				logger.info("Recherche dans le laboratoire "
						+ laboratoire.getName()

						+ " la présence  répertoire web dans l'étude "
						+ etude.getName());

				File f = new File(etude,
						defaultProps.getProperty("flag.laboratoire"));

				if (f.exists() && f.isDirectory()) {
					logger.info("Un repertoire web est trouvé pour l'etude "
							+ etude.getName() + " du laboratoire "
							+ laboratoire.getName());
					etudes.add(etude);

				}
			}
		}
		return etudes;
	}

	public static List<File> listLaboratoireWeb(final File folder) {

		List<File> laboratoires = new ArrayList<>();
		logger.info("Recherche des laboratoires");
		for (final File lecteur : folder.listFiles()) {
			logger.info("Recherche dans le répertoire " + lecteur.getName()
					+ " la présence d'un répertoire web");
			if (!lecteur.getName().contains("$RECYCLE.BIN")
					&& !lecteur.getName().contains("Thumbs.db")
					&& !lecteur.getName().contains("System Volume Information")
					&& lecteur.isDirectory()) {
				File f = new File(lecteur,
						defaultProps.getProperty("flag.etude"));

				if (f.exists() && f.isDirectory()) {
					laboratoires.add(lecteur);
					logger.info("Le répertoire " + lecteur.getName()
							+ " a un répertoire web. fin");

				}

			}

		}
		return laboratoires;
	}

}
