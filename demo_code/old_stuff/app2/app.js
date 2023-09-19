const express = require('express');
const app = express();
require('dotenv').config();

const animeRouter = require('./routes/anime');
app.use('/anime', animeRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`))