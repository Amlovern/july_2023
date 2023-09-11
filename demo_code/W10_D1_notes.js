/*
    Frontend vs Backend

    Frontend
        UI/UX, dealing with visuals (accessibility), fetching (requests), requesting data from the server
        Develop requests, handle responses

    Backend
        Data storage/handling (DB), sending data to client (response), routing (API), efficiency, security
        Handle requests, develop responses

    What is an API?
        Tool for delivering data, creating a way for user to interact with data

    What is a Framework?
        Structure around which we build something else

    What is Express?
        An API framework
        A backend is just a framework or skeleton that a project/site is built around

    Steps to start with Express
        Initialize node
            * npm init -y
        Install packages
            Express - npm install express
            Nodemon - npm install -D nodemon
        Create an app.js file - main hub of application
            Import express
            Use Express to instantiate app object
            Listen to a port (start server)

    Route Handlers
        App object methods
            * Post, Delete, Put/Patch, Get, Use, All
        Request path
            * String, array of strings, regular expression, 
            array of RegEx, array of strings and RegEx
    
    Middleware
        Series of callback functions

    Response Methods
        send - plain text or JSON
        json - always sends JSON
        ------
        render - render server side HTML
        redirect

    app.method(path, (middleware) => { response })

*/