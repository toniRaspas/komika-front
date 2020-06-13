const router = require('express').Router();

const Comic = require('../models/comic');


router.get('/', async (req, res) => {
    Comic.getAllComics()
        .then((rows) => {
            res.json(rows);
        }).catch((err) => {
            res.json({ error: err.message });
        });
});

router.get('/:genero', async (req, res) => {
    try {
        const genero = await Comic.getByCat(req.params.genero);
        res.json(genero);
    } catch (err) {
    }
});





module.exports = router;
