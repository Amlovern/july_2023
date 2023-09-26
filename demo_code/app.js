const express = require('express');
const app = express();
require('dotenv').config();
const { Anime, Genre, sequelize } = require('./db/models')
const { Op, Sequelize } = require('sequelize')
const productionStudioRouter = require('./routes/productionStudio')

app.use(express.json());

app.use('/productionstudio', productionStudioRouter);

app.get('/search', async (req, res) => {
    const { page, size, title, maxLength, genre } = req.query;
    
    const pagination = {};

    if (page > 0 && size > 0) {
        pagination.limit = size;
        pagination.offset = size * (page - 1)
    }

    if (!page) pagination.offset = 0;
    if (!size) pagination.limit = 5;

    const queryObj = {where: {}, include: [], ...pagination}

    if (title) {
        queryObj.where.title = {
            [Op.substring]: title
        }
    }

    // if (maxLength) {
    //     queryObj.where.numEpisodes = {
    //         [Op.lte]: maxLength
    //     }
    // }
    if (maxLength) {
        queryObj.where= sequelize.where(sequelize.fn('CHAR_LENGTH', sequelize.col('title')), { [Op.lte]: 10 })
        
    }

    if (genre) {
        queryObj.include.push({
            model: Genre,
            where: {
                name: genre
            }
        })
    }

    console.log('queryObj', queryObj)
    
    const anime = await Anime.findAll(queryObj)

    res.json(anime)
})



const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`));