const { Router } = require('express');
const router = Router();
// const {checkloging} = require('../js/middlewares/middles');
// const { Keeper } = require('../db');

router
.get('/',  async (req, res) => { res.render('loging.ejs'); })
.get('/register',  async (req, res) => { res.render('register.ejs'); })
.get('/chat',  async (req, res) => { res.render('salaunica.ejs'); });
// .post('/', async (req, res) => {
//     try {
//         await Keeper.create(req.body);

//     } catch (err) {
//         req.flash('errors', err.errors[key].message);
//     }
//     res.redirect('/');
// });

module.exports = router;