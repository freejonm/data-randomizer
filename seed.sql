DROP DATABASE IF EXISTS data_to_rand;

CREATE DATABASE data_to_rand;

USE data_to_rand;

/* Edit the information in the parentheses below to match the columns in your file */

CREATE TABLE initial_data (
  id INT NOT NULL AUTO_INCREMENT,
  author VARCHAR(100) NULL,
  title VARCHAR(100) NULL,
  abstract VARCHAR(100) NULL,
  PRIMARY KEY (id)
);

/* Edit the first line below to match the local path to the file you want to select a random sample from */

LOAD DATA LOCAL INFILE '/Users/jonfree/Documents/test1.csv' 
INTO TABLE initial_data
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;