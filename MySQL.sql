
DROP DATABASE  IF EXISTS KAYAK;
CREATE DATABASE KAYAK;

USE KAYAK;

DROP TABLE IF EXISTS USERS;
DROP TABLE IF EXISTS FLIGHTS;
DROP TABLE IF EXISTS ROOMS;
DROP TABLE IF EXISTS CLASSES;
DROP TABLE IF EXISTS HOTELS;


CREATE TABLE USERS (
	user_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	email VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    zip_code INT(6) NOT NULL,
    phone INT(15) NOT NULL,
    trip_id INT(15),
    image VARCHAR(500),
    credit_card INT(20) NOT NULL,
    user_status INT(1) NOT NULL
);



CREATE TABLE HOTELS (
	hotel_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	hotel_name VARCHAR(30) NOT NULL,	
    address VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    zip_code INT(6) NOT NULL,
    stars INT(5) NOT NULL,
    rooms INT(3) NOT NULL,
    ratings INT(5) NOT NULL,
    reviews INT(1) NOT NULL
);


CREATE TABLE ROOMS (
	room_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	room_type VARCHAR(30) NOT NULL,	    
    price INT(5) NOT NULL,    
    hotel_id INT(6) UNSIGNED 
);



ALTER TABLE ROOMS
ADD FOREIGN KEY (hotel_id) REFERENCES HOTELS(hotel_id) 
ON DELETE CASCADE;




CREATE TABLE FLIGHTS (
	flight_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	airline VARCHAR(30) NOT NULL,	
    departure TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    arrival TIMESTAMP  DEFAULT CURRENT_TIMESTAMP,
    origin VARCHAR(50) NOT NULL,
    detination VARCHAR(50) NOT NULL
);



CREATE TABLE CLASSES (
	class_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    flight_id INT(6) UNSIGNED NOT NULL,
	class_name VARCHAR(30) NOT NULL,	
    prices INT(5) NOT NULL
);

ALTER TABLE CLASSES
ADD FOREIGN KEY (flight_id) REFERENCES FLIGHTS(flight_id) 
ON DELETE CASCADE;



CREATE TABLE CARS (
	car_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,    
	car_name VARCHAR(30) NOT NULL,	
    car_type VARCHAR(20) NOT NULL,	
    price INT(5) NOT NULL,
    details VARCHAR(500)
);


CREATE TABLE BILLING (
	billing_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,    
	billing_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,	
    booking_type VARCHAR(20) NOT NULL,	
    amount INT(5) NOT NULL,
    user_id INT(6) UNSIGNED 
);

ALTER TABLE BILLING
ADD FOREIGN KEY (user_id) REFERENCES USERS(user_id) 
ON DELETE CASCADE;


CREATE TABLE ADMINS (
	user_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	email VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    zip_code INT(6) NOT NULL
   
);



ALTER TABLE classes 
DROP FOREIGN KEY classes_ibfk_1;

ALTER TABLE flights
change flight_id flight_id varchar(6),
change detination destination varchar(50);

Alter table classes
change flight_id flight_id varchar(6);

ALTER TABLE CLASSES
ADD FOREIGN KEY (flight_id) REFERENCES FLIGHTS(flight_id) 
ON DELETE CASCADE;

alter table users add column password varchar(300) not null

alter table cars add column location varchar(300) not null

INSERT INTO `KAYAK`.`USERS`
(
`first_name`,
`last_name`,
`email`,
`address`,
`city`,
`state`,
`zip_code`,
`phone`,
`trip_id`,
`image`,
`credit_card`,
`user_status`,
`password`)
VALUES
("Akshay",
"Mishra",
"a@gmail.com",
"3rd Street",
"San Jose",
"CA",
95113,
6696699,
273,
"https://r3.whistleout.com.au/public/images/articles/2016/01/traveller.jpg",
1234567890,
1,
"password");




