const express = require('express');
const router = express.Router();
const { Op } = require("sequelize");
const { ProductionStudio } = require('../db/models');

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


module.exports = router;