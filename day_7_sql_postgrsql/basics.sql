`
sql is a communicating language

1. writing efficient queries to retrieve information.
2. designing the schema and structuring the database.

https://pg-sql.com/
`
-- create a table
CREATE TABLE cities (   --CREATE TABLE => keyWord --cities => identifier
  name VARCHAR(50),
  country VARCHAR(50),
	population INTEGER,
  area INTEGER
);

--add one row to the data base
INSERT INTO cities (name,country,population,area)
VALUES('Tokyo','Japan','3000','114');


--add multiple row to database
INSERT INTO cities (name,country,population,area)
VALUES
Cairo	Egypt
('Tokyo','Japan','3000','114'),
('Mexico City','Mexico','100','112'),
('Cairo','Egypt','4321','231');

--Retrieving Data with Select
SELECT * FROM cities -- retrieving all the data
SELECT country FROM cities --retrieving info by clo the data

--Filtering Rows with "Where"
SELECT * FROM cities WHERE NAME = ('um') -- retrieving a record with name um
SELECT * FROM cities WHERE NAME IN ('um')-- retrieving a record with name um

--Updating Rows
UPDATE cities SET name = 'gogo lolo' WHERE name = 'Tokyo'

--Deleting Rows
DELETE  FROM cities WHERE area = 111

