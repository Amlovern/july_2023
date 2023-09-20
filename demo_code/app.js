const express = require('express');
const app = express();
require('dotenv').config();
const productionStudioRouter = require('./routes/productionStudio')

app.use(express.json());

app.use('/productionstudio', productionStudioRouter);



const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`));