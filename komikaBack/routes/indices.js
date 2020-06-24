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
  const result = await Indice.updatePage(req.body.fk_usuario, req.body.fk_comic, req.params.pagina);
  console.log(req.params.pagina);
  if (result['affectedRows'] === 1) {
    res.json({ success: 'Página actualizada' });
  } else {
    res.json({ error: 'No se puede actualizar' })
  }

})
/*
router.put('/pag/:id/:page', async (req, res) => {
  const result = await Indice.progress(req.paramsreq.params.page);
  if (result['affectedRows'] === 1) {
    res.json({ success: 'pagina actualizada' });
  } else {
    res.json({ error: 'No se ha podido actualizar el indice' });
  }
})
*/

module.exports = router;