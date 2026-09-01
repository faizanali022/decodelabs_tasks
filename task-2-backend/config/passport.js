// Admin authentication config
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const { Admin } = require('./database');

module.exports = (passport) => {
    passport.use(new LocalStrategy(
        { usernameField: 'username' },
        async (username, password, done) => {
            try {
                const admin = await Admin.findOne({ where: { username } });
                if (!admin) return done(null, false, { message: 'Invalid username' });
                
                const isMatch = await bcrypt.compare(password, admin.password);
                if (!isMatch) return done(null, false, { message: 'Invalid password' });
                
                return done(null, admin);
            } catch (err) {
                return done(err);
            }
        }
    ));
    
    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser(async (id, done) => {
        try {
            const admin = await Admin.findByPk(id);
            done(null, admin);
        } catch (err) {
            done(err);
        }
    });
};