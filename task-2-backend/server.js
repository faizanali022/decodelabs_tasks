// Main entry point
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const methodOverride = require('method-override');

const db = require('./config/database');
const indexRoutes = require('./routes/index');
const adminRoutes = require('./routes/admin');
const blogRoutes = require('./routes/blog');

const app = express();

// ========== View Engine ==========
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ========== Middleware ==========
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// Session & Passport
app.use(session({
    secret: process.env.SESSION_SECRET || 'secretkey',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Make user available in all views
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    res.locals.currentPath = req.path;
    next();
});

// ========== Routes ==========
app.use('/', indexRoutes);
app.use('/admin', adminRoutes);
app.use('/blog', blogRoutes);

// Test route debug
app.get('/test-route', (req, res) => res.json({ status: 'ok', message: 'test route works' }));

// 404 Handler
app.use((req, res) => {
    console.log('🔴 404 - Path:', req.path);
    res.status(404).render('pages/404', { metaTitle: 'Page Not Found' });
});

// Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('pages/500', { metaTitle: 'Server Error' });
});

// ========== Sync Database & Start Server ==========
const PORT = process.env.PORT || 3000;

// Try to sync database, but don't fail if it's not available
db.sequelize.sync({ alter: false })
    .then(() => {
        console.log('✅ Database synced successfully');
        app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
    })
    .catch((err) => {
        console.warn('⚠️ Database connection failed:', err.message);
        console.log('📌 Continuing without database...\n');
        // Start server anyway for development
        app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
    });