var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
//router.get('/about', function(req, res, next) {
//  res.render('index', { title: 'About' });
//});
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});
//router.get('/contact', function(req, res, next) {
// res.render('index', { title: 'Contact' });
//});
/* GET Router for displaying the login page*/
router.get('/login', indexController.displayLoginPage);
/* POST Router for processing the Login Page*/
router.post('/login', indexController.processLoginPage);

/* GET Router for displaying register Page*/
router.get('/register', indexController.displayRegisterPage);

/* POST Router for processing the register Page*/
router.post('/register', indexController.processRegisterPage);

/* GET Router for processing the Login Page*/
router.get('/logout', indexController.performLogout);

module.exports = router;
