/*

Aggregate Functions!
    MAX
    MIN
    AVG
    COUNT(*)
    TOTAL
        * If all values are null, return 0.0
        * Always returns a floating point value
    SUM
        * If all values are null, return null
        * Can return a float or integer

Where do we place aggregate functions?
 * SELECT <function>(<column OR *>) FROM <table>;

When we run an aggregate function, we DO NOT get all the info
    from that table

We can add a WHERE clause

We can also add GROUP BY
    Perform the action on different groups of data
    ONLY way to return multiple things from one of these funcs

We can add to HAVING our GROUP BY
    This acts like a WHERE clause, but for the groups we created


All of our Keywords:
SELECT
FROM
JOIN ON
WHERE
GROUP BY
HAVING
ORDER BY
LIMIT
OFFSET

Subqueries!
    Kind of like helper functions in SQL
    Can be used to replace JOIN ON
    Can be used to get info across multiple tables without
        the need of a relationship
    
    When writing a subquery, we ask 2 questions before starting
        What information do we have?
        What information are we looking for?
    
    SELECT * FROM <table>
    WHERE <FK column> = (
        SELECT id FROM <other table>
    )
*/