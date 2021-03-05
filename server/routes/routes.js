const { Router } = require('express');
const router = Router();

// const { Keeper } = require('../db');


function checkLogin(req, res, next) {
    if (req.session.user == null) {
    res.redirect('/login');
    }
    res.locals.user = req.session.user;
    next();
}

router
.get('/', checkLogin, async (req, res) => { res.render('index.ejs'); })
.post('/', checkLogin, async (req, res) => {
    try {
        await Keeper.create(req.body);

    } catch (err) {
        req.flash('errors', err.errors[key].message);
    }
    res.redirect('/');
});

module.exports = router;