// Admin login/logout
const passport = require('passport');

exports.loginForm = (req, res) => {
    res.render('admin/login', { message: req.query.message || null });
};

exports.login = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.redirect('/admin/login?message=Invalid credentials');
        req.logIn(user, (err) => {
            if (err) return next(err);
            return res.redirect('/admin/dashboard');
        });
    })(req, res, next);
};

exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) return next(err);
        res.redirect('/admin/login');
    });
};

exports.dashboard = async (req, res) => {
    const db = require('../config/database');
    const blogCount = await db.Blog.count();
    const serviceCount = await db.Service.count();
    const cityCount = await db.City.count();
    res.render('admin/dashboard', { title: 'Dashboard', blogCount, serviceCount, cityCount });
};