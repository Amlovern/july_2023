const express = require('express');
const app = express();

require('dotenv').config();

const pandaRouter = require('./routes/pandas');

app.use(express.json());

app.use('/panda', pandaRouter)

app.use('/styling', express.static('assets/css'))

const test = (req, res, next) => {
    console.log(`path: ${req.path}`);
    next()
}

const checkUserInput = (req, res, next) => {
    if (!req.body.stuff) {
        return res.send('please include a stuff property')
    };
    next();
}

// app.use((req, res, next) => {
//     console.log('error test');
//     const err = new Error();
//     // err.statusCode = 400;
//     next(err)
// })

app.use('/actors', checkUserInput)

app.get(['/test', '/banana'], (request, response) => {
    console.log(process.env.MESSAGE)
    response.send('Hello from your first express API! :)')
})

app.post('/create', (req, res) => {
    console.log(req.body)
})

app.get('/actors/:userId/movies/:movieId', (req, res) => {
    console.log(req.params)
})

app.get('/actors/:actorId', (req, res) => {
    console.log('param', req.params)
    console.log('query', req.query)
})

app.use((err, req, res, next) => {
    console.log(err);
    const status = err.statusCode || 400;
    res.status(status)
    res.json({
        message: err.message || "Something went wrong...",
        status
    })
})

const port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`))