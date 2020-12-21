CREATE DATABASE  IF NOT EXISTS `facturacion` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `facturacion`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: facturacion
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `biblioteca`
--

DROP TABLE IF EXISTS `biblioteca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `biblioteca` (
  `nro_usuario` int NOT NULL,
  `nro_producto` int NOT NULL,
  `puntaje` int DEFAULT NULL,
  PRIMARY KEY (`nro_producto`,`nro_usuario`),
  KEY `FK_BIBLIOTECA_USUARIO` (`nro_usuario`),
  CONSTRAINT `FK_BIBLIOTECA_PRODUCTO` FOREIGN KEY (`nro_producto`) REFERENCES `producto` (`nro_producto`),
  CONSTRAINT `FK_BIBLIOTECA_USUARIO` FOREIGN KEY (`nro_usuario`) REFERENCES `usuario` (`nro_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


DROP TABLE IF EXISTS `factura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `factura` (
  `nro_factura` int NOT NULL AUTO_INCREMENT,
  `fecha` varchar(50) DEFAULT NULL,
  `total_sin_iva` double NOT NULL,
  `iva` double NOT NULL,
  `total_con_iva` double DEFAULT NULL,
  `nro_usuario` int NOT NULL,
  `nro_producto` int NOT NULL,
  PRIMARY KEY (`nro_factura`),
  KEY `FK_FACTURA_USUARIO` (`nro_usuario`),
  KEY `nro_producto` (`nro_producto`),
  CONSTRAINT `factura_ibfk_1` FOREIGN KEY (`nro_producto`) REFERENCES `producto` (`nro_producto`),
  CONSTRAINT `FK_FACTURA_USUARIO` FOREIGN KEY (`nro_usuario`) REFERENCES `usuario` (`nro_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `nro_producto` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `sinopsis` varchar(800) NOT NULL,
  `imagen` varchar(200) NOT NULL,
  `precio` double NOT NULL,
  `genero` varchar(20) NOT NULL,
  `genero_secundario` varchar(20) NOT NULL,
  `link` varchar(200) NOT NULL,
  PRIMARY KEY (`nro_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `nro_usuario` int NOT NULL AUTO_INCREMENT,
  `username` varchar(40) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`nro_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

