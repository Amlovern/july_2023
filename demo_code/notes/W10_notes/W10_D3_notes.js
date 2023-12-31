/*

DATABASES

Collection of data
    * Stored in tables in Row/Column format
    * Relational vs non-relational
    * Columns can have different rules applied to them
    * Each instance of a row is called a Record
    * Tables have a plural name

What is the tool called that we use to manage and interact with DBs? RDBMS
What is SQL?
    Structured Query Language
    A way to interact with our DB

With SQL, we MUST end our lines with a ";"

Use the .tables command to look at all of our tables

Adding columns to a table follows a pattern:
<column name> <data type> <attributes/constraints>

Insert data into a DB

INSERT INTO <table name> (list of comma separated columns that we are adding data to)
VALUES
(data set 1),
(data set 2),
etc;


Querying the DB
All queries need at least 2 statements: SELECT and FROM
    * SELECT - What columns do you want?
    * FROM - What table are you querying?
We can do so much more than that!
    * WHERE - Allows us to filter or target specific values
        ** Can chain multiple filters AND/OR

Updating and Deleting from a DB
    * DELETE FROM <table name> WHERE <condition>;
    * UPDATE <table name> SET <column name> = <value> WHERE <condition>;
*/