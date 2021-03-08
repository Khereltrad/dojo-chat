const { Router } = require('express');
const router = Router();
// const {checkloging} = require('../js/middlewares/middles');
const { TbUsuario } = require('../data/models/userdb');

router
.post('/datosregistro', async (req, res) => { 
   console.log(req.body);
   // verificar que no existe otro usuario con el mismo mail

   // crear el nuevo usuario en la base de datos

   // guardar el usuario en sesion

   // redirigir a la pantalla principal
   res.redirect('/chat');
});

module.exports = router;