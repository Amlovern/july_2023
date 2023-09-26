/*

When setting up pagination, we need 2 things from our query string
    page and size -> offset and limit
    We need default behavior for if these values are not provided
        * Page = 1; Size = 5
    If page and size are less than 1, add no pagination and return all result


Search Parameters
    Included in our req.query
    
    1) Should take in a title string, and match partial titles in DB
    2) Should take in a maxLength string to filter out longer anime names
    3) Should take in a genre string and find all
        anime associated with that genre

*/