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


module.exports = router;