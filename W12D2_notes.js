/*

When setting up pagination, we need 2 things from our query string
    page and size -> offset and limit
    We need default behavior for if these values are not provided
        * Page = 1; Size = 5
    If page and size are less than 1, add no pagination and return all result

*/