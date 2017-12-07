# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.20)
# Database: nutrition
# Generation Time: 2017-12-02 19:40:11 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table fooddb
# ------------------------------------------------------------

DROP TABLE IF EXISTS `fooddb`;

CREATE TABLE `fooddb` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `URI` text,
  `FOOD` varchar(255) DEFAULT NULL,
  `QUANTITY` int(11) DEFAULT NULL,
  `MEASURE` varchar(30) DEFAULT NULL,
  `FOODID` varchar(50) NOT NULL,
  `FOODURI` text,
  `WEIGHT` float DEFAULT NULL,
  `RETAINED_WEIGHT` int(11) DEFAULT NULL,
  `MEASURE_URI` text,
  `ENERC_KCAL_QUANTITY` float DEFAULT '0',
  `ENERC_KCAL_UNIT` varchar(15) DEFAULT NULL,
  `FAT_QUANTITY` float DEFAULT '0',
  `FAT_UNIT` varchar(15) DEFAULT NULL,
  `FASAT_QUANTITY` float DEFAULT '0',
  `FASAT_UNIT` varchar(15) DEFAULT NULL,
  `FAMS_QUANTITY` float DEFAULT '0',
  `FAMS_UNIT` varchar(15) DEFAULT NULL,
  `FAPU_QUANTITY` float DEFAULT '0',
  `FAPU_UNIT` varchar(15) DEFAULT NULL,
  `CHOCDF_QUANTITY` float DEFAULT '0',
  `CHOCDF_UNIT` varchar(15) DEFAULT NULL,
  `FIBTG_QUANTITY` float DEFAULT '0',
  `FIBTG_UNIT` varchar(15) DEFAULT NULL,
  `SUGAR_QUANTITY` float DEFAULT '0',
  `SUGAR_UNIT` varchar(15) DEFAULT NULL,
  `PROCNT_QUANTITY` float DEFAULT '0',
  `PROCNT_UNIT` varchar(15) DEFAULT NULL,
  `NA_QUANTITY` float DEFAULT '0',
  `NA_UNIT` varchar(15) DEFAULT NULL,
  `CA_QUANTITY` float DEFAULT '0',
  `CA_UNIT` varchar(15) DEFAULT NULL,
  `MG_QUANTITY` float DEFAULT '0',
  `MG_UNIT` varchar(15) DEFAULT NULL,
  `K_QUANTITY` float DEFAULT '0',
  `K_UNIT` varchar(15) DEFAULT NULL,
  `FE_QUANTITY` float DEFAULT '0',
  `FE_UNIT` varchar(15) DEFAULT NULL,
  `ZN_QUANTITY` float DEFAULT '0',
  `ZN_UNIT` varchar(15) DEFAULT NULL,
  `P_QUANTITY` float DEFAULT '0',
  `P_UNIT` varchar(15) DEFAULT NULL,
  `VITA_RAE_QUANTITY` float DEFAULT '0',
  `VITA_RAE_UNIT` varchar(15) DEFAULT NULL,
  `VITC_QUANTITY` float DEFAULT '0',
  `VITC_UNIT` varchar(15) DEFAULT NULL,
  `THIA_QUANTITY` float DEFAULT '0',
  `THIA_UNIT` varchar(15) DEFAULT NULL,
  `RIBF_QUANTITY` float DEFAULT '0',
  `RIBF_UNIT` varchar(15) DEFAULT NULL,
  `NIA_QUANTITY` float DEFAULT '0',
  `NIA_UNIT` varchar(15) DEFAULT NULL,
  `VITB6A_QUANTITY` float DEFAULT '0',
  `VITB6A_UNIT` varchar(15) DEFAULT NULL,
  `FOLDFE_QUANTITY` float DEFAULT '0',
  `FOLDFE_UNIT` varchar(15) DEFAULT NULL,
  `FOLFD_QUANTITY` float DEFAULT '0',
  `FOLFD_UNIT` varchar(15) DEFAULT NULL,
  `TOCPHA_QUANTITY` float DEFAULT '0',
  `TOCPHA_UNIT` varchar(15) DEFAULT NULL,
  `VITK1_QUANTITY` float DEFAULT '0',
  `VITK1_UNIT` varchar(15) DEFAULT NULL,
  `ALCOHOL_FREE` tinyint(1) DEFAULT '0',
  `CELERY_FREE` tinyint(1) DEFAULT '0',
  `CRUSTACEAN_FREE` tinyint(1) DEFAULT '0',
  `DAIRY_FREE` tinyint(1) DEFAULT '0',
  `EGG_FREE` tinyint(1) DEFAULT '0',
  `FISH_FREE` tinyint(1) DEFAULT '0',
  `GLUTEN_FREE` tinyint(1) DEFAULT '0',
  `KIDNEY_FRIENDLY` tinyint(1) DEFAULT '0',
  `KOSHER` tinyint(1) DEFAULT '0',
  `LOW_POTASSIUM` tinyint(1) DEFAULT '0',
  `LUPINE_FREE` tinyint(1) DEFAULT '0',
  `MUSTARD_FREE` tinyint(1) DEFAULT '0',
  `LOW_FAT_ABS` tinyint(1) DEFAULT '0',
  `NO_OIL_ADDED` tinyint(1) DEFAULT '0',
  `LOW_SUGAR` tinyint(1) DEFAULT '0',
  `PALEO` tinyint(1) DEFAULT '0',
  `PEANUT_FREE` tinyint(1) DEFAULT '0',
  `PESCATARIAN` tinyint(1) DEFAULT '0',
  `PORK_FREE` tinyint(1) DEFAULT '0',
  `RED_MEAT_FREE` tinyint(1) DEFAULT '0',
  `SESAME_FREE` tinyint(1) DEFAULT '0',
  `SHELLFISH_FREE` tinyint(1) DEFAULT '0',
  `SOY_FREE` tinyint(1) DEFAULT '0',
  `SUGAR_CONCIOUS` tinyint(1) DEFAULT '0',
  `TREE_NUT_FREE` tinyint(1) DEFAULT '0',
  `VEGAN` tinyint(1) DEFAULT '0',
  `VEGETARIAN` tinyint(1) DEFAULT '0',
  `WHEAT_FREE` tinyint(1) DEFAULT '0',
  `NIGHTSHADE` tinyint(1) DEFAULT '0',
  `SPECIFIC_CARBS` tinyint(1) DEFAULT '0',
  `MILK_FREE` tinyint(1) DEFAULT '0',
  `MOLLUSK_FREE` tinyint(1) DEFAULT '0',
  `NO_SUGAR_ADDED` tinyint(1) DEFAULT '0',
  `PLANTRICIOUS` tinyint(1) DEFAULT '0',
  `FAT_FREE` tinyint(1) DEFAULT '0',
  `BALANCED` tinyint(1) DEFAULT '0',
  `HIGH_FIBER` tinyint(1) DEFAULT '0',
  `HIGH_PROTEIN` tinyint(1) DEFAULT '0',
  `LOW_CARB` tinyint(1) DEFAULT '0',
  `LOW_FAT` tinyint(1) DEFAULT '0',
  `LOW_SODIUM` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `FOODID` (`FOODID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

LOCK TABLES `fooddb` WRITE;
/*!40000 ALTER TABLE `fooddb` DISABLE KEYS */;

INSERT INTO `fooddb` (`ID`, `URI`, `FOOD`, `QUANTITY`, `MEASURE`, `FOODID`, `FOODURI`, `WEIGHT`, `RETAINED_WEIGHT`, `MEASURE_URI`, `ENERC_KCAL_QUANTITY`, `ENERC_KCAL_UNIT`, `FAT_QUANTITY`, `FAT_UNIT`, `FASAT_QUANTITY`, `FASAT_UNIT`, `FAMS_QUANTITY`, `FAMS_UNIT`, `FAPU_QUANTITY`, `FAPU_UNIT`, `CHOCDF_QUANTITY`, `CHOCDF_UNIT`, `FIBTG_QUANTITY`, `FIBTG_UNIT`, `SUGAR_QUANTITY`, `SUGAR_UNIT`, `PROCNT_QUANTITY`, `PROCNT_UNIT`, `NA_QUANTITY`, `NA_UNIT`, `CA_QUANTITY`, `CA_UNIT`, `MG_QUANTITY`, `MG_UNIT`, `K_QUANTITY`, `K_UNIT`, `FE_QUANTITY`, `FE_UNIT`, `ZN_QUANTITY`, `ZN_UNIT`, `P_QUANTITY`, `P_UNIT`, `VITA_RAE_QUANTITY`, `VITA_RAE_UNIT`, `VITC_QUANTITY`, `VITC_UNIT`, `THIA_QUANTITY`, `THIA_UNIT`, `RIBF_QUANTITY`, `RIBF_UNIT`, `NIA_QUANTITY`, `NIA_UNIT`, `VITB6A_QUANTITY`, `VITB6A_UNIT`, `FOLDFE_QUANTITY`, `FOLDFE_UNIT`, `FOLFD_QUANTITY`, `FOLFD_UNIT`, `TOCPHA_QUANTITY`, `TOCPHA_UNIT`, `VITK1_QUANTITY`, `VITK1_UNIT`, `ALCOHOL_FREE`, `CELERY_FREE`, `CRUSTACEAN_FREE`, `DAIRY_FREE`, `EGG_FREE`, `FISH_FREE`, `GLUTEN_FREE`, `KIDNEY_FRIENDLY`, `KOSHER`, `LOW_POTASSIUM`, `LUPINE_FREE`, `MUSTARD_FREE`, `LOW_FAT_ABS`, `NO_OIL_ADDED`, `LOW_SUGAR`, `PALEO`, `PEANUT_FREE`, `PESCATARIAN`, `PORK_FREE`, `RED_MEAT_FREE`, `SESAME_FREE`, `SHELLFISH_FREE`, `SOY_FREE`, `SUGAR_CONCIOUS`, `TREE_NUT_FREE`, `VEGAN`, `VEGETARIAN`, `WHEAT_FREE`, `NIGHTSHADE`, `SPECIFIC_CARBS`, `MILK_FREE`, `MOLLUSK_FREE`, `NO_SUGAR_ADDED`, `PLANTRICIOUS`, `FAT_FREE`, `BALANCED`, `HIGH_FIBER`, `HIGH_PROTEIN`, `LOW_CARB`, `LOW_FAT`, `LOW_SODIUM`)
VALUES
	(1,'http://www.edamam.com/ontologies/edamam.owl#01e8de73-9d3a-411d-abfc-9d938e801e07','Apples, raw, with skin',100,'gram','Food_09003','http://www.edamam.com/ontologies/edamam.owl#Food_09003',100,100,'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',52,'kcal',0.17,'g',0.028,'g',0.007,'g',0.051,'g',13.81,'g',2.4,'g',10.39,'g',0.26,'g',1,'mg',6,'mg',5,'mg',107,'mg',0.12,'mg',0.04,'mg',11,'mg',3,'�g',4.6,'mg',0.017,'mg',0.026,'mg',0.091,'mg',0.041,'mg',3,'�g',3,'�g',0.18,'mg',2.2,'�g',1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0),
	(2,'http://www.edamam.com/ontologies/edamam.owl#317a1a99-ab77-4f71-a6da-a7337ba18d1b','Nuts, coconut meat, dried (desiccated), not sweetened',100,'gram','Food_12108','http://www.edamam.com/ontologies/edamam.owl#Food_12108',100,100,'http://www.edamam.com/ontologies/edamam.owl#Measure_gram',660,'kcal',64.53,'g',57.218,'g',2.745,'g',0.706,'g',23.65,'g',16.3,'g',7.35,'g',6.88,'g',37,'mg',26,'mg',90,'mg',543,'mg',3.32,'mg',2.01,'mg',206,'mg',0,NULL,1.5,'mg',0.06,'mg',0.1,'mg',0.603,'mg',0.3,'mg',9,'�g',9,'�g',0.44,'mg',0.3,'�g',1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0);

/*!40000 ALTER TABLE `fooddb` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
