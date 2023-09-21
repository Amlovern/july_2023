/*

Association Methods

Getter Method
    After querying a table, we get a getter method to search for
    associated data

    The method will be singular/plural depending on relationship
    Basically exist to enable lazy loading

Create Method
    After querying a table, we can create a record for a related table
    We don't have to add the value for the FK

Add Method
    In a Many to Many relationship, allows us to add a record to Joins Table



Dynamic Seeding
    Restructure our seed data so that we have something that won't cahange
    about the related table (like a name), then all of the related seed data

    We iterate over that array
        First sending request to look for related data
        Then iterating over inner array and seeding new data


Aggregate Functions
    We want to lazy load our aggregate data

    Min/Max
        await <model>.<func>(<col>)
    Count
        await <model>.count()
        Can also <model>.findAll() then find length
    Sum
        await <model>.sum(<col>)

    We can pass in an object for a WHERE clause
    If we want to interact with the result from a query
        We have to use <instance>.toJSON() to turn into a regular obj
*/