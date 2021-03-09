const { Router } = require('express');
const router = Router();
// const {checkloging} = require('../js/middlewares/middles');
const { TbUsuario } = require('../data/models/userdb');

router
.get('/',  async (req, res) => { res.render('loging.ejs'); })
.get('/register',  async (req, res) => { res.render('register.ejs'); })
.get('/chat',  async (req, res) => { res.render('salaunica.ejs'); })

.get('/chat2',  async (req, res) => { res.render('sala-dos.ejs'); });
module.exports = router;