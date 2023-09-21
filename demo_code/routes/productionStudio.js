const express = require('express');
const router = express.Router();
const { Op } = require("sequelize");
const { ProductionStudio, Anime, Genre } = require('../db/models');

router.get('/', async (req, res) => {
    const studioData = await ProductionStudio.findAll({
        attributes: ['name', 'yearEstablished'],
        order: [['yearEstablished', 'ASC'], ['name', 'DESC']]
    });

    res.json(studioData)
});

router.get('/one', async (req, res) => {
    const {year} = req.query;

    const studio = await ProductionStudio.findOne({
        where: {
            // name: name
            yearEstablished: year
        }
    })
    // SELECT * FROM productionStudios WHERE name = name;

    res.json(studio);
});

router.get('/:id(\\d+)', async (req, res) => {
    const id = req.params.id;

    const studio = await ProductionStudio.findByPk(id)

    res.json(studio)
})

router.get('/search', async (req, res) => {
    const { filter } = req.query;
    
    const studios = await ProductionStudio.findAll({
        where: {
            name: {
                [Op.substring]: filter
            }
        }
    });
    
    res.json(studios)
})

router.post('/build', async (req, res) => {
    const { name, location, yearEstablished } = req.body;

    const newStudio = ProductionStudio.build({name, location, yearEstablished});
    newStudio.validate();
    await newStudio.save();

    res.json(newStudio)
});

router.post('/create', async (req, res) => {
    const { name, location, yearEstablished } = req.body;

    const newStudio = await ProductionStudio.create({name, location, yearEstablished})

    res.json(newStudio)
})

router.put('/:id', async (req, res) => {
    const { name, location, yearEstablished } = req.body;

    const studio = await ProductionStudio.findByPk(req.params.id);

    if (name !== undefined) {
        studio.name = name;
    };
    if (location) {
        studio.location = location;
    };
    if (yearEstablished) {
        studio.yearEstablished = yearEstablished;
    };

    await studio.save()

    res.json(studio)
})

router.delete('/:id', async (req, res) => {
    const studio = await ProductionStudio.findByPk(req.params.id);

    await studio.destroy();

    res.json(studio)
})

router.get('/anime', async(req, res) => {
    // const anime = await ProductionStudio.findAll({
    //     // include: {
    //     //     model: Anime,
    //     //     where: {
    //     //         avgRating: {
    //     //             [Op.gt]: 9
    //     //         }
    //     //     }
    //     // },
    //     // attributes: ['name']
    //     include: {
    //         model: Anime,
    //         include: {
    //             model: Genre,
    //             through: {
    //                 attributes: []
    //             }
    //         }
    //     }
    // })
    

    const anime = await Anime.findAll({
        include: [ProductionStudio, Genre]
    })

    res.json(anime)
})

router.get('/method', async (req, res) => {
    const { title, releaseYear, numEpisodes, type, completed, avgRating } = req.body;
    const anime = await Anime.findOne();
    // const studio = await ProductionStudio.getByPk(anime.studioId)
    const studio = await anime.getProductionStudio()
    const genres = await anime.getGenres()

    // const newAnime = await studio.createAnime({
    //     title, releaseYear, numEpisodes, type, completed, avgRating
    // });

    const newAnimeGenre = await anime.addGenre(1);

    res.json({
        anime,
        studio,
        genres,
        // newAnime,
        newAnimeGenre
    })
})

router.get('/agg', async (req, res) => {
    const highestRating = await Anime.max('avgRating')
    const lowestRating = await Anime.min('avgRating')
    const numAnime = await Anime.count({
        where: {
            type: 'show'
        }
    })
    // await Anime.findAll().length
    const allEpisodes = await Anime.sum('numEpisodes', {
        where: {
            type: 'show'
        }
    })
    const avgNumEpisodes = allEpisodes / numAnime
    const bestAnimu = await Anime.findOne({
        where: {
            avgRating: highestRating
        }
    })

    const bestAnimeObj = bestAnimu.toJSON();

    // bestAnimeObj.highestRating = highestRating


    res.json({
        highestRating,
        lowestRating,
        numAnime,
        allEpisodes,
        avgNumEpisodes,
        // bestAnimu,
        ...bestAnimeObj
    })
})


module.exports = router;