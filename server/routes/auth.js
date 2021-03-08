const { Router } = require('express');
const { TbUsuario } = require('../data/models/userdb');
const bcrypt = require('bcrypt');
const router = Router();
// const {checkloging} = require('../js/middlewares/middles');

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
      console.log('Nuevo usuario: ', user);
      // guardar el usuario en sesion
      req.session.user = user;
   } 
   catch(err) {  // En el caso de algún error, guardamos los errores en "errors", y redirigimos al formulario
      console.log(err);
      // for (var key in err.errors) { req.flash('errors', err.errors[key].message);}
      return res.redirect('/');
   }
   // redirigir a la pantalla principal
   res.redirect('/chat');
});

// // 3. Ruta para que los usuarios que ya existen, entren a la plataforma (formulario de login)
// router.post('/login', async (req, res) => {
//    // Primero intentamos recuperar el usuario por su email
//    const user = await User.findOne({where: {email: req.body.email}});
//    if (user == null) {
//      // en caso de que ese email no exista
//      req.flash('errors', 'Usuario inexistente o contraseña incorrecta');
//      return res.redirect('/login');
//    }
//    // Después comparamos contraseñas
//    var isCorrect = await bcrypt.compare(req.body.password, user.password);
//    if (isCorrect == false) {
//      // en caso de que ese email no exista
//      req.flash('errors', 'Usuario inexistente o contraseña incorrecta');
//      return res.redirect('/login');
//    }
 
//    // Finalmente redirigimos al home
//    req.session.user = user;
//    res.redirect('/')
//  });
 
 // 4. Ruta para cerrar sesión
 router
 .get('/logout', async (req, res) => { req.session.user = null; res.redirect('/login'); });

module.exports = router;