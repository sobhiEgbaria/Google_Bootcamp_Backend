-- Write a query that returns the first name and last name of customers
--who are not of menopause age (1980 between 2000).
-- The output should be sorted in ascending order, first by last name and then by first name.
Select first_name, last_name 
From Customer
Where extract(year from birthdate) not between 1980 and 2000  
Order by last_name, first_name;


--Write a query that returns N.Customer, N.Appointment and appointment date, of appointments.
--where the client's weight was with BMI is normal
Select M.cellular_no, meeting_no, date
From Customer C inner join Meeting M on C.cellular_no = M.cellular_no
Where M.weight/(height*height) between 18.5 and 25
;

--Write a query that returns different customers who have the same name (first name ,last name).
--The query must return the first name, last name, and tax.
--The first customer and the second customer number that have this name (no repeats).
--The output should be sorted in descending order, first by last name and then by first name.

--option one
Select distinct C1.first_name, C1.last_name, C1.cellular_no, C2.cellular_no
From Customer C1 inner join Customer C2 on C1.last_name = C2.last_name 
					                   and C1.first_name = C2.first_name 
Where C1.cellular_no <> C2.cellular_no
Order by last_name DESC, first_name DESC
;
--option two
WITH customers_with_more_than_one_cell AS (
	select last_name, first_name, COUNT(cellular_no) cellular_count  
	from customer C1
	GROUP by last_name, first_name
	HAVING COUNT(cellular_no) > 1) 
SELECT cW2.last_name, cW2.first_name,c2.cellular_no
FROM customers_with_more_than_one_cell cW2
	JOIN customer C2 ON cW2.last_name = C2.last_name AND cW2.first_name = C2.first_name
order by last_name, first_name DESC;

--option 3
SELECT DISTINCT ON (C1.first_name, C1.last_name) 
	C1.first_name, C1.last_name, C1.cellular_no, C2.cellular_no
FROM customer C1 JOIN customer C2 USING(first_name, last_name) 
WHERE C1.cellular_no <> C2.cellular_no
ORDER BY last_name DESC, first_name DESC


--Write a query that returns menu codes, their description,
--the name of their main type, the name of their secondary type (provided that both have a value),
--which were created in the last year, and where the main type begins with the words del
Select distinct M.menu_code, M.description, MT1.name
From Menu M inner join Menu_Type MT1 on M.main_type= MT1.type_no 
           inner join Menu_Type MT2 on M.secondary_type= MT2.type_no 
Where extract(year from M.creation_date) = 2022 and MT1.name like 'low%'
;

