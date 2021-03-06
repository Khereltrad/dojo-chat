const { Router } = require('express');
const { TbUsuario, TbMensaje } = require('../data/models/userdb');
const session = require("express-session");
const bcrypt = require('bcrypt');
const flash =  require('connect-flash');
const router = Router();
const {checkLogin,checkAdmin} = require('../js/middlewares/middles');

router

.post('/datosregistro', async (req, res) => { 

   // crear el nuevo usuario en la base de datos
   try {
      const password_encrypted = await bcrypt.hash(req.body.password, 10);
      
      const usuario = await TbUsuario.findAndCountAll();
      let rol_usuario = "USUARIO";
      if(usuario.count==0){ rol_usuario="ADMIN"};
      const user = await TbUsuario.create({
         nickname: req.body.nickname,        
         name: req.body.name,
         lastname: req.body.lastname,
         rol: rol_usuario,
         email: req.body.email,
         password: password_encrypted
      });
   } 
   catch(err) {  // En el caso de algún error, guardamos los errores en "errors", y redirigimos al formulario
      console.log(err);
      // for (var key in err.errors) { req.flash('errors', err.errors[key].message);}
      return res.redirect('/');
   }
   req.session.user = user;
   res.redirect('/chat');
});

router.post('/datosloging', async (req, res) => {

   const errors   =  req.flash("errors");
   const mensajes =  req.flash("mensaje");

   const user = await TbUsuario.findOne({where: {email: req.body.email}});
   if (user == null) {
      console.log('Intento de loging con datos errados -EM');
      req.flash('errors', 'Usuario inexistente o contraseña incorrecta');
      return res.redirect('/');      
   }

   let isCorrect = await bcrypt.compare(req.body.password, user.password);
   if (isCorrect == false) {
      console.log('Intento de loging con datos errados -PW');
      req.flash('errors', 'Usuario inexistente o contraseña incorrecta');
      return res.redirect('/');
   }
   req.session.user = user;
   console.log(`Logeo exitoso del `+user.rol+` `+user.name);
   res.redirect('/chat2');
 });
 
router.post('/datamsg', async (req,res) =>{

   // const errors   =  req.flash("errors");
   // const mensajes =  req.flash("mensaje");
   console.log(req.body);
   const new_mensaje = await TbMensaje.create({
      message: req.body.message,
      UsuarioId: req.session.user.id
   });

   // console.log(new_mensaje);
   res.redirect('/chat2');
});

 // 4. Ruta para cerrar sesión
 router
 .get('/logout', async (req, res) => { req.session.user = null; res.redirect('/'); });

module.exports = router;