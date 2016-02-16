

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `etudesgelbintra`
--

-- --------------------------------------------------------

--
-- Structure de la table `etude`
--

CREATE TABLE IF NOT EXISTS `etude` (
  `id` int(10) NOT NULL,
  `libelle` varchar(50) NOT NULL,
  `libelle_affichage` varchar(250) NOT NULL,
  `id_laboratoire` int(10) NOT NULL,
  `couleur1` varchar(50) NOT NULL,
  `couleur2` varchar(50) NOT NULL,
  `logo` varchar(50) NOT NULL,
  `actu` mediumblob,
  `couleurtexte` varchar(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;



--
-- Structure de la table `fichier`
--

CREATE TABLE IF NOT EXISTS `fichier` (
  `id` int(10) NOT NULL,
  `libelle` varchar(250) NOT NULL,
  `id_etude` int(10) NOT NULL,
  `chemin` varchar(300) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `fichier`
--


--
-- Structure de la table `fichier_utilisateur`
--

CREATE TABLE IF NOT EXISTS `fichier_utilisateur` (
  `id_fichier` int(10) NOT NULL,
  `id_utilisateur` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- --------------------------------------------------------

--
-- Structure de la table `laboratoire`
--

CREATE TABLE IF NOT EXISTS `laboratoire` (
  `id` int(10) NOT NULL,
  `libelle` varchar(50) NOT NULL,
  `libelle_affichage` varchar(50) NOT NULL,
  `logo` varchar(50) NOT NULL,
  `couleur1` varchar(50) NOT NULL,
  `couleur2` varchar(50) NOT NULL,
  `couleurtexte` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;



--
-- Structure de la table `utilisateur`
--

CREATE TABLE IF NOT EXISTS `utilisateur` (
  `id` int(10) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `identifiant` varchar(50) NOT NULL,
  `mdp` varchar(50) NOT NULL,
  `type` tinyint(2) NOT NULL,
  `id_laboratoire` int(10) DEFAULT NULL,
  `id_etude` int(10) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;


--
-- Index pour la table `etude`
--
ALTER TABLE `etude`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `fichier`
--
ALTER TABLE `fichier`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `fichier_utilisateur`
--
ALTER TABLE `fichier_utilisateur`
  ADD UNIQUE KEY `id_fichier` (`id_fichier`,`id_utilisateur`);

--
-- Index pour la table `laboratoire`
--
ALTER TABLE `laboratoire`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `etude`
--
ALTER TABLE `etude`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `fichier`
--
ALTER TABLE `fichier`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=99;
--
-- AUTO_INCREMENT pour la table `laboratoire`
--
ALTER TABLE `laboratoire`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=38;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
