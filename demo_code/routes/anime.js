const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database(process.env.DB_FILE, sqlite3.OPEN_READWRITE);

// GET all Anime
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM anime;'
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.json(err)
        };
        res.json(rows)
    })
})

router.get('/:animeId', (req, res) => {
    const sql = 'SELECT * FROM anime WHERE id = ?;'
    const params = [req.params.animeId];
    
    db.get(sql, params, (err, row) => {
        if (err) {
            return res.json(err)
        };
        res.json(row)
    })
})

module.exports = router;