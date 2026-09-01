// Public routes (Home, Services)
const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');
const serviceController = require('../controllers/serviceController');

console.log('📍 Loading index routes');
console.log('✅ serviceController.showService available?', typeof serviceController.showService);

router.get('/', pageController.home);
router.get('/about', pageController.about);
router.get('/contact', pageController.contact);
router.post('/contact', pageController.submitContact);
// Privacy Policy Page
router.get('/privacy-policy', (req, res) => {
  res.render('pages/privacy', {
    title: 'Privacy Policy | Home Staff Services Pakistan',
    metaDescription: 'Privacy Policy for Home Staff Services. Learn how we collect, use, and protect your personal information.',
    layout: 'layouts/blank',  // Clean layout without distractions
    currentPath: '/privacy-policy'
  });
});
router.get('/services', pageController.servicesList);
router.get('/cities', pageController.allCities);

// Debug middleware for this route
router.get('/services/:slug', (req, res, next) => {
  console.log('🎯 /services/:slug route hit! slug:', req.params.slug);
  next();
}, serviceController.showService);

router.get('/cities/:slug', pageController.cityPage);


module.exports = router;