const express = require('express');
const app = express();
require('dotenv').config();
const { Anime } = require('./db/models')
const productionStudioRouter = require('./routes/productionStudio')

app.use(express.json());

app.use('/productionstudio', productionStudioRouter);

app.get('/search', async (req, res) => {
    const { page, size } = req.query;

    const pagination = {};

    if (page > 0 && size > 0) {
        pagination.limit = size;
        pagination.offset = size * (page - 1)
    }

    if (!page) pagination.offset = 0;
    if (!size) pagination.limit = 5;

    console.log(pagination)
    const anime = await Anime.findAll({
        ...pagination
    })

    res.json(anime)
})



const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`));