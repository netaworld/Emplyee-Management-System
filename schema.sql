DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

USE employee_tracker;

CREATE TABLE departments(
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE roles(
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    departent_id INT,
    PRIMARY KEY (id)
);
CREATE TABLE employees(
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);





