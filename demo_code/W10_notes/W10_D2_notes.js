/*
    Middleware!

    next() must be invoked in order to move onto the next middleware

    All middleware must take in at least 3 params
        * req, res, next

    app.use is explicitely used for middleware
        * The path string is not needed, but can be useful
        * The path doesn't have to match. It just has to start with it
    
    We can pass something into our next invocation
    If we pass anything into next, Express will skip
    all middleware until it finds one with 4 params

    Serving Static Files
        Boilerplate code
            app.use(express.static('assets'))
        We can access those files by sending a request

    Error Handling middleware
        * Takes in a 4th arg (err)
        * Generally is at the end of the pipeline
        * Anytime we generate a new Error, we need add a statusCode
            property
        * We must also set the status code in our error handler

    Routers
        * An extension of our app object
        * Routers behave like app object in many ways, but not all

    Environment Variables
        Three common environments
            1) Testing
            2) Development (dev)
            3) Production
        
        Used to obscure sensitive information

        3 ways to setup env
            1) Through the cli
            2) Adding to our package.json scripts
            3) Create a .env file
*/