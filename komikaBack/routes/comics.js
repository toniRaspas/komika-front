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
        console.log(req.params);
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

/////////////////////////MOSTRAR LINK//////////////////////

router.get('/pdf/:id', async (req, res) => {
    try {
        const viewer = await Comic.getByIdViewer(req.params.id);
        res.json(viewer);
    } catch (err) {
        res.send(err);
    }
});

// GET BY DESCRIPTION
router.get('/descripcion/:id', async (req, res) => {
    try {
        const viewer = await Comic.getByIdDescription(req.params.id);
        res.json(viewer);
    } catch (err) {
        res.send(err);
    }
})


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


router.put('/edit/:comicId', async (req, res) => {
    const result = await Comic.updateById(req.params.comicId, req.body);
    if (result['affectedRows'] === 1) {
        res.json({ success: 'Cómic actualizado' });
    } else {
        res.json({ error: 'No se ha podido actualizar correctamente' });
    }
});

router.post('/create', async (req, res) => {
    console.log(req.body);
    const result = await Comic.createComic(req.body);
    console.log(result);

    if (result['affectedRows'] === 1) {
        res.json({ success: 'Cómic creado' });
    } else {
        res.json({ error: 'No se ha podido crear una nueva entrada' });
    }
});



module.exports = router;
