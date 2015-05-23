-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 26, 2015 at 02:43 PM
-- Server version: 5.5.42-cll
-- PHP Version: 5.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `elementi_al`
--

-- --------------------------------------------------------

--
-- Table structure for table `shortened_links`
--

CREATE TABLE IF NOT EXISTS `shortened_links` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `link` text COLLATE utf8_unicode_ci NOT NULL,
  `short` char(8) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=52 ;

--
-- Dumping data for table `shortened_links`
--

INSERT INTO `shortened_links` (`id`, `link`, `short`) VALUES
(2, '/?rontap', 's4Fs92a1'),
(3, 'http://developer.android.com/design/material/index.html', 'RjeplKtD'),
(4, 'rombo/reloaded', 'qSA68aeK'),
(5, 'rombo/reloaded', '7WkNJRx4'),
(6, 'http://elemential.net/?polyfome', '06rcdjVN'),
(7, 'rombo/reloaded', 'nqOOPlD9'),
(8, 'http://elemential.net/?sgsd', 'Vvh0grgd'),
(9, 'http://elemential.net/?polyfome', 'khTrNXO2'),
(10, 'http://elemential.net/?polyfome', '5NZo23oj'),
(11, 'http://elemential.net/?polyfomed', 'jvysAIko');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
