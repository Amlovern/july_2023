const express = require('express');
const app = express();

app.use(express.json());

app.get(['/test', '/banana'], (request, response) => {
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

const port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`))