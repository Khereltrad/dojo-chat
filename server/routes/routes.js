const { Router } = require('express');
const router = Router();
const {checkloging, checkLogin} = require('../js/middlewares/middles');
const { TbMensaje } = require('../data/models/userdb');

router
.get('/',  async (req, res) => { res.render('loging.ejs'); })
.get('/register',  async (req, res) => { res.render('register.ejs'); })
// .get('/chat',  async (req, res) => { res.render('salaunica.ejs'); })
.get('/chat2',checkLogin,  async (req, res) => { const chats = await TbMensaje.findAll();const user = req.session.user; res.render('sala-dos.ejs',{chats,user});});
module.exports = router;