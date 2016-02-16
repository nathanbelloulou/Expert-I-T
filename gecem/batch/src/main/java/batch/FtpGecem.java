package batch;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.log4j.Logger;

public class FtpGecem {
	private static Logger logger = Logger.getLogger(FtpGecem.class);

	public boolean sendFtpClient(String repertoire, String etude, File[] files,
			Properties defaultProps) throws IOException {

		FileInputStream fis = null;
		FTPClient client = new FTPClient();

		try {

			String server = defaultProps.getProperty("ftp.server");
			int port = Integer.parseInt(defaultProps.getProperty("ftp.port"));
			String user = defaultProps.getProperty("ftp.user");
			String pass = defaultProps.getProperty("ftp.pass");

			client.connect(server, port);
			boolean ind = client.login(user, pass);
			logger.info("connection :" + ind);
			client.setControlEncoding("UTF-8");
			client.enterLocalPassiveMode();
			client.setFileType(FTP.BINARY_FILE_TYPE);
			client.changeWorkingDirectory("www");
			client.changeWorkingDirectory("gecem");
			client.changeWorkingDirectory("data");
			client.changeWorkingDirectory(repertoire);
			if (550 == client.getReplyCode()) {
				client.makeDirectory(repertoire);
				client.changeWorkingDirectory(repertoire);
			}
			client.deleteFile(etude);
			client.makeDirectory(etude);
			client.changeWorkingDirectory(etude);

			//
			// Store file to server
			//
			for (File file : files) {
				if (!file.isDirectory())
					client.storeFile(file.getName(), new FileInputStream(file));
			}

			client.logout();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (fis != null) {
					fis.close();
				}
				client.disconnect();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return false;
	}

}
