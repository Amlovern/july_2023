const express = require('express');
const app = express();

app.use(express.json());

app.get(['/test', '/banana'], (request, response) => {
    response.send('Hello from your first express API! :)')
})

app.post('/create', (req, res) => {
    console.log(req.body)
})

const port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`))