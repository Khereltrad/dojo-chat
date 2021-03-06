const { Router } = require('express');
const router = Router();

// const { Keeper } = require('../db');


// function checkLogin(req, res, next) {
//     if (req.session.user == null) {
//     res.redirect('/login');
//     }
//     res.locals.user = req.session.user;
//     next();
// }

router
.get('/',  async (req, res) => { res.render('loging.ejs'); });
// .post('/', async (req, res) => {
//     try {
//         await Keeper.create(req.body);

//     } catch (err) {
//         req.flash('errors', err.errors[key].message);
//     }
//     res.redirect('/');
// });

module.exports = router;