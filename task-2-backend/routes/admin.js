// Admin dashboard routes
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const blogController = require('../controllers/blogController');
const serviceController = require('../controllers/serviceController');
const { isAuthenticated } = require('../middleware/auth');
const upload = require('../middleware/upload');

router.get('/login', authController.loginForm);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

// Protected routes
router.use(isAuthenticated);
router.get('/dashboard', authController.dashboard);
router.get('/blog', blogController.adminList);
router.get('/blog/create', blogController.createForm);
router.post('/blog', upload, blogController.create);
router.get('/blog/edit/:id', blogController.editForm);
router.put('/blog/edit/:id', upload, blogController.update);
router.delete('/blog/delete/:id', blogController.delete);
router.get('/services', serviceController.adminManage);

module.exports = router;