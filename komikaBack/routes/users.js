var router = require('express').Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');



//Registro de usuarios
router.post('/registro', async (req, res) => {
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

  console.log(req.body);

  const usuario = await Usuario.getByEmail(req.body.email);
  if (usuario) {
    const password = bcrypt.compareSync(req.body.password, usuario.password);
    if (password) {
      res.json({ success: 'Login Correcto', token: createToken(usuario.id), rol: usuario.rol })
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

//acceder a los datos del perfil por usuario
router.get('/:usuario', async (req, res) => {
  const usuario = await Usuario.getByUser(req.params.usuario);
  console.log(usuario);
  try {
    res.json(usuario);
  } catch (err) {
    res.send(err)
  }
});

module.exports = router;
