const express = require('express');
const router = express.Router();

//create a middleware to check if the user has the right role

router.get('/', (req, res) => {
    res.send('Inside panda router')
})

router.get('/panda', (req, res) => {
    res.send('panda panda panda')
})

module.exports = router;