const { Router } = require('express');
const router = Router();
// const {checkloging} = require('../js/middlewares/middles');
const { TbUsuario } = require('../data/models/userdb');

router
.get('/',  async (req, res) => { res.render('loging.ejs'); })
.get('/register',  async (req, res) => { res.render('register.ejs'); })
.get('/chat',  async (req, res) => { res.render('salaunica.ejs'); })
.post('/datosregistro', async (req, res) => { 
   console.log(req.body);
   res.render('loging.ejs'); });
// .post('/', async (req, res) => {
//     try {
//         await Keeper.create(req.body);

//     } catch (err) {
//         req.flash('errors', err.errors[key].message);
//     }
//     res.redirect('/');
// });

module.exports = router;