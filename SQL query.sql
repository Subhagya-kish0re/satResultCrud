create database satresultcrud;
use satresultcrud;
CREATE TABLE sat_results (
    name VARCHAR(255) PRIMARY KEY,
    address VARCHAR(255),
    city VARCHAR(255),
    country VARCHAR(255),
    pincode VARCHAR(10),
    sat_score INT,
    passed BOOLEAN
);

