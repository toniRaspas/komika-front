const router = require('express').Router();

const Autor = require('../models/autor');


router.get('/', (req, res) => {
    Autor.getAllAuthors()
        .then((rows) => {
            res.json(rows);
        }).catch((err) => {
            res.json({ error: err.message });
        });
});

router.get('/:autorId', async (req, res) => {
    try {
        const comic = await Autor.getById(req.params.autorId);
        res.json(comic);
    } catch (err) {
        res.send(err);
    }
});


router.delete('/:autorId', async (req, res) => {
    const result = await Autor.deleteById(req.params.autorId);
    if (result['affectedRows'] === 1) {
        res.json({ success: 'El autor ha sido borrado' });
    } else {
        res.json({ error: 'Ha habido un problema y no se ha podido borrar la consulta' });
    }
});


router.put('/edit/:autorId', async (req, res) => {
    console.log(req.body);
    const result = await Autor.updateById(req.params.autorId, req.body);
    console.log(result);
    if (result['affectedRows'] === 1) {
        res.json({ success: 'Autor actualizado' });
    } else {
        res.json({ error: 'No se ha podido actualizar correctamente' });
    }
});

module.exports = router;
