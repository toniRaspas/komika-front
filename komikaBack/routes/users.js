var router = require('express').Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');



//Registro de usuarios
router.post('/registro', async (req, res) => {

  console.log(req.body);

  const email = await Usuario.getByEmail(req.body.email);
  const user = await Usuario.getByUser(req.body.usuario);

  if (email) {
    res.json({ error: 'El email ya está registrado' })
  } else if (user) {
    res.json({ error: 'El usuario ya está registrado' })
  } else {

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    result = await Usuario.create(req.body);
    result['affectedRows'] === 1 ? res.json({ success: 'Registro correcto' }) : res.json({ error: 'Error en el registro' });
  }
});



//Login de usuarios
router.post('/login', async (req, res) => {
  const usuario = await Usuario.getByEmail(req.body.email);
  if (usuario) {
    const password = bcrypt.compareSync(req.body.password, usuario.password);
    if (password) {
      res.json({ success: 'Login Correcto', token: createToken(usuario.id) })
    } else {
      res.json({ error: 'El email y/o la contraseña no son correctos' })
    }
  } else {
    res.json({ error: 'El email y/o la contraseña no son correctos' });
  }

});



// Token
function createToken(pUsuarioId) {
  payload = {
    idUsuario: pUsuarioId,
    curr: Math.floor(Date.now()),
    exp: Math.floor(Date.now() / 2000) + (60 * 60)
  }
  return jwt.sign(payload, process.env.SECRET_KEY);
}

module.exports = router;
