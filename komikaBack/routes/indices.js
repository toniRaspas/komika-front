const router = require('express').Router();
const Comic = require('../models/comic');
const Usuario = require('../models/usuario');
const Indice = require('../models/indice');



router.get('/:indice', async (req, res) => {
  const indices = await Indice.getIndexUserId(req.params.indice)
  console.log(req.params.indice);
  try {
    res.json(indices);
  }
  catch (err) {
    res.send(err)
  }

})

router.post('/tbi/:usuario/:comic', async (req, res) => {

  const result = await Indice.createInIndex(req.params.usuario, req.params.comic)

  console.log(result);

  if (result['affectedRows'] === 1) {
    res.json({ success: 'Indice creado' });
  } else {
    res.json({ error: 'No se ha podido crear una nueva entrada' });
  }

})

router.delete('/delete/:usuario/:comic', async (req, res) => {
  const result = await Indice.deleteIndex(req.params.usuario, req.params.comic)
  if (result['affectedRows'] === 1) {
    res.json({ success: 'Indice borrado' });
  } else {
    res.json({ error: 'No se ha podido borrar el indice' });
  }
})

router.put('/page/:fk_usuario/:fk_comic/:pagina', async (req, res) => {
  const result = await Indice.updatePage(req.params.fk_usuario, req.params.fk_comic, req.params.pagina);
  console.log(req.params.pagina);
  if (result['affectedRows'] === 1) {
    res.json({ success: 'Página actualizada' });
  } else {
    res.json({ error: 'No se puede actualizar' })
  }

})

router.get('/getpage/:fk_usuario/:fk_comic', async (req, res) => {
  const paginas = await Indice.getAllFks(req.params.fk_usuario, req.params.fk_comic);
  try {
    res.json(paginas[0]);
  }
  catch (err) {
    res.send(err)
  }
})

router.put('/updatestatus/:id/:estado', async (req, res) => {
  const result = await Indice.updateState(req.params.id, req.params.estado);
  if (result['affectedRows'] === 1) {
    res.json({ success: 'Página actualizzada capuyo' })
  } else {
    res.json({ error: 'No se puede actualizar' })
  }
})
////////modificar la cosa esta que recibe un
router.put('/yourpoint/:fk_usuario/:fk_comic/:puntuacion', async (req, res) => {
  const result = await Indice.insertPoints(req.params.fk_usuario, req.params.fk_comic, req.params.puntuacion);
  if (result['affectedRows'] === 1) {
    res.json(req.params.puntuacion)
  } else {
    res.json({ error: 'Mete algo que sirva por dios' })
  }
})

router.get('/avg/:fk_comic', async (req, res) => {
  const media = await Indice.showAvg(req.params.fk_comic)
  try {
    res.json(media)
  }
  catch (err) {
    res.send(err)

  }
})

module.exports = router;