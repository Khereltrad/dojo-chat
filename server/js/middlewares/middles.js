
                                                        //^ Funcion para chequear loging
function checkLogin(req, res, next) {
    if (req.session.user == null) {
    res.redirect('/login');
    }
    res.locals.user = req.session.user;
    next();
};


module.exports = checkLogin;