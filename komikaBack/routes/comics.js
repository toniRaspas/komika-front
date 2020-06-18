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

router.get('/:comicId', async (req, res) => {
    try {
        const comic = await Comic.getById(req.params.comicId);
        res.json(comic);
    } catch (err) {
        res.send(err);
    }
});


/////////FILTRO POR CATEGORIA///////////////////////////////////
router.get('/categoria/:genero', async (req, res) => {
    try {
        const genero = await Comic.getByCat(req.params.genero);
        res.json(genero);
    } catch (err) {
        res.send(err)
    }
});



////////////////////////////////////////FILTRO POR TITULO///////////////////////////////////////
router.get('/titulo/:titulo', async (req, res) => {
    try {
        const titulo = await Comic.getByTit(req.params.titulo);
        res.json(titulo);
    } catch (err) {
        res.send(err)
    }
});


//////////////////////////FILTRO POR CATEGORIA, Y POR TITULO//////////////////////////////

router.get('/filter/:genero/:titulo', async (req, res) => {
    console.log(req.params.genero);
    console.log(req.params.titulo);
    try {
        const filtro = await Comic.getByFilter(req.params.genero, req.params.titulo);
        res.json(filtro);
    } catch (err) {
        res.send(err)
    }
});


// Borrar Cómic

router.delete('/:comicId', async (req, res) => {
    const result = await Comic.deleteById(req.params.comicId);
    if (result['affectedRows'] === 1) {
        res.json({ success: 'El cómic ha sido borrado' });
    } else {
        res.json({ error: 'Ha habido un problema y no se ha podido borrar la consulta' });
    }
});

// Actualizar Info cómic

router.put('/:comicId', async (req, res) => {
    const result = await Comic.updateById(req.params.comicId, req.body);
    if (result['affecteRows'] === 1) {
        res.json({ success: 'Cómic actualizado' });
    } else {
        res.json({ error: 'No se ha podido actualizar correctamente' });
    }
});






module.exports = router;
