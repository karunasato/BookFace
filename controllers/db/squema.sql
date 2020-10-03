DROP DATABASE IF EXISTS study_group;

CREATE DATABASE study_group;

USE study_group; 

CREATE TABLE `group` (
id int AUTO_INCREMENT NOT NULL,
groupName VARCHAR(30) NOT NULL,
description VARCHAR (500) NOT NULL,
currentlyReading VARCHAR (30),
currentImgUrl VARCHAR (500),
currentAuth VARCHAR (30),
PRIMARY KEY(id)
);

INSERT INTO `group` (groupName, description, currentlyReading, currentImgUrl, currentAuth)
VALUES ("Group CSS", "This group studies CSS! If you are interested, please join. We meet every Thursday at 7pm.", "CSS: The Missing Manual","https://www.google.com/books/edition/CSS/UkObAgAAQBAJ?hl=en&gbpv=1&dq=css&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","David Saywer McFarland");
INSERT INTO `group` (groupName, description, currentlyReading, currentImgUrl, currentAuth)
VALUES ("Group HTML", "This group studies HTML! If you are interested, please join. We meet every Thursday at 7pm.", "Head First HTML and CSS","https://www.google.com/books/edition/Head_First_HTML_and_CSS/BZIYQtV6yKsC?hl=en&gbpv=1&dq=html&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","Elisabeth Robson and Eric Freeman");
INSERT INTO `group` (groupName, description, currentlyReading, currentImgUrl, currentAuth)
VALUES ("Group JavaScript", "This group studies JavaScript! If you are interested, please join. We meet every Thursday at 7pm.", "Eloquent JavaScript","https://www.google.com/books/edition/Eloquent_JavaScript/p1v6DwAAQBAJ?hl=en&gbpv=1&dq=javascript&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","Marijn Haverbeke");




CREATE TABLE books (
id int AUTO_INCREMENT NOT NULL,
groupId Int(15) NOT NULL,
title VARCHAR(100) NOT NULL,
author VARCHAR(50) NOT NULL,
description VARCHAR(25) NOT NULL,
img VARCHAR(200) NOT NULL,
PRIMARY KEY(id)
);