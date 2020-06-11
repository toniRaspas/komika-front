const router = require('express').Router();

const Comic = require('../models/comic');


router.get('/', (req, res) => {
    Comic.getAllComics()
        .then((rows) => {
            res.json(rows);
        }).catch((err) => {
            res.json({ error: err.message });
        });
});





module.exports = router;