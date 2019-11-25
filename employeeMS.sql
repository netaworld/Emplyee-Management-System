DROP DATABASE IF EXISTS employeeManagmentSystem_DB;
CREATE DATABASE employeeManagmentSystem_DB;

USE employeeManagmentSystem_DB;

CREATE TABLE auctions(
  id INT NOT NULL AUTO_INCREMENT,
  employee_name VARCHAR(30) NOT NULL,
  category VARCHAR(45) NOT NULL,
  starting_bid INT default 0,
  highest_bid INT default 0,
  PRIMARY KEY (id)
);

--------------------------
DROP DATABASE IF EXISTS employeesList_db;
CREATE DATABASE employeesList_db;
USE employeesList_db;

CREATE TABLE employees(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  employeeId INTEGER(11),
  title VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE authors(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(30),
  lastName VARCHAR(30),
  PRIMARY KEY (id)
);

INSERT INTO employee (firstName, lastName, manager) values ('Jane', 'Austen');
INSERT INTO employee (firstName, lastName, assistantManager) values ('Mark', 'Twain');
INSERT INTO employee (firstName, lastName, CEO) values ('Lewis', 'Carroll');
INSERT INTO employee (firstName, lastName, bankerOne) values ('Andre', 'Asselin');
INSERT INTO employee (firstName, lastName, teller) values ('Max', 'Brown');
INSERT INTO employee (firstName, lastName, teller) values ('Mark', 'Green');
INSERT INTO employee (firstName, lastName, teller) values ('Lewis', 'White');
INSERT INTO employee (firstName, lastName, teller) values ('Andre', 'Smith');


SELECT * FROM employeeList;
SELECT * FROM employeeId;

-- show ALL books with authors
-- INNER JOIN will only return all matching values from both tables
SELECT employee, firstName, lastName
FROM employeeList
INNER JOIN authors ON books.authorId = authors.id;


