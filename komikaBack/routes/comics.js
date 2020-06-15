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



router.get('/categoria/:genero', async (req, res) => {
    try {
        const genero = await Comic.getByCat(req.params.genero);
        res.json(genero);
    } catch (err) {
        res.send(err)
    }
});

router.get('/titulo/:titulo', async (req, res) => {
    try {
        const titulo = await Comic.getByTit(req.params.titulo, req.params.autor);
        res.json(titulo);
    } catch (err) {
        res.send(err)
    }
});

router.get('/filter/:categoria/:titulo', async (req, res) => {
    console.log(req.params.genero);
    console.log(req.params.titulo);
    try {
        const filtro = await Comic.getByFilter(req.params.genero, req.params.titulo);
        res.json(filtro);
    } catch (err) {
        res.send(err)
    }
});




module.exports = router;
