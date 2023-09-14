/*

Relationships!

3 types of relationships
    one to one
    one to many
    many to many

A many to many relationship requires a Join table
The Foreign Key (FK) is put on the many side of
     a many to many relationship

When we delete something that other data relies on, we run into a FK Constraint error
ON DELETE
    CASCADE - add to the FK column
    SET NULL

NEW QUERY OPERATORS!
BETWEEN - inclusive
    * WHERE <column> BETWEEN <value 1> AND <value 2>
IN - something is true from a group of possibilities
    * WHERE <column> IN (<comma separated values>)
LIKE - Search for partial strings
    * WHERE <column> LIKE <string>
    * % as a wildcard character
ORDER BY - allows us to go against the default ordering behavior
    * ORDER BY <column>
    * Default is ASC
    * Can be reversed using DESC
    * Can order by multiple factors by adding more columns
        separated by commas
LIMIT - only return a certain number of records
    * LIMIT <value>
OFFSET - skip a certain number of records
    * OFFSET <value>
    * Pagination
    * Can only be used in conjunction with Limit
We can perform math operations inside of a SELECT
    * SELECT <column> + <value> FROM <table>;
    * This doesn't actually change anything in our DB
We can alias our columns inside of a SELECT
    * SELECT <column> AS <alias> FROM <table>;
*/