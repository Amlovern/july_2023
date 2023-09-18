const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
require('dotenv').config();

const db = new sqlite3.Database(process.env.DB_FILE, sqlite3.OPEN_READWRITE);

app.use(express.json());


router.post('/search', (req, res, next) => {
    if (req.body.filter.length > 0) {
        const searchTerm = req.body.filter;
        if (searchTerm.includes(';')) return 'Don\' be a jerk'
        const sql = `SELECT * FROM boardgames WHERE name = '${searchTerm}';`; // 'Rising Sun'; DROP TABLE user_data;
        db.exec(sql, (err) => {
            if (err) {
                next(err)
            } else {
                db.all(sql, [], (err, rows) => {
                    console.log(rows);
                    if (error) {
                        next(error)
                    } else {
                        res.json(rows)
                    }
                })
            }
        })
    } else {
        res.json({ msg: 'Please provide part of a game name.' })
    }
});




router.get('/:gameId(\\d+)', (req, res, next) => {
    const sql = 'SELECT boardgames.name, boardgames.max_players, categories.category, reviews.content, users.username FROM boardgames JOIN categories ON (boardgames.category_id = categories.id) JOIN reviews ON (boardgames.id = reviews.game_id) JOIN users ON (reviews.user_id = users.id) WHERE boardgames.id = ?;'
    const params = [req.params.gameId];
    db.all(sql, params, (err, rows) => {
        if (err) {
            next(err)
        } else {
            res.json(rows)
        }
    })
});





// N+1
router.get('/', (req, res, next) => {
    const params = [];
    const sql = 'SELECT boardgames.id, boardgames.name, boardgames.max_players, boardgames.category_id FROM boardgames;'
    db.all(sql, params, (err, rows) => {
        if (err) {
            next(err)
        } else {
            for (let i = 0; i < rows.length; i++) {
                console.log(rows[i]);
                const sql2 = `SELECT categories.category FROM categories WHERE id = ${rows[i].category_id};`
                db.get(sql2, [], (err, row) => {
                    // add each category to corresponding game object
                })
            }
            res.json({ games: rows })
        }
    })
})