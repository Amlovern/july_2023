/*

Questions 1
    What makes SQL inefficient?
        Large datasets - SQL checks every single line
        Connections to the DB

    What are some things we can do to improve efficiency?
        Indexes
        Using JOINS and Subqueries
            Minimize connections to DB
        Having a good table/relationship structure
        Benchmarking
        SELECT only the data we need

Questions 2
    What is the syntax for creating an index?
        CREATE INDEX <index name> ON <table name> (<list of cols>)
        We can also create a UNIQUE index

    What is the naming convention for indexes? I.e. table users, cols: first_name, last_name
        <idx_table_columns>
        idx_users_first_name_last_name
        idx_users_fn_ln

    What is the time complexity of a query without an index? And with an index?
        Without: O(n)
        With: O(log n)

    Every time we add an index, all of our other operations become much more expensive
        Is the resource a read-heavy resource or write-heavy resource

    Benchmarking
        Times a query to test efficiency
        .timer on
        The first time we run a query is the slowest

    How do we check if a query is already using an index?
        EXPLAIN QUERY PLAN
        SCAN = No Index, checking ALL records
        SEARCH = Index, binary search of an index

Questions 3
    What steps do we take to benchmark a query?
        1. Write a query
        2. Turn .timer on
        3. Run query to get initial time
        4. EXPLAIN QUERY PLAN to identify if an index is already being used
        5. Add index
        6. EXPLAIN QUERY PLAN again to confirm that the index is being used
        7. Run query again to get new time

    What is an N+1 Query?
        When we run am initial query, then iterate over those results
        and for each result, we run an additional query.

    What is the difference between Lazy load and Eager load?
        lazy loading is getting it when you need it, eager loading is where you get it beforehand


*/