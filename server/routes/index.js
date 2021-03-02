/*

    File name: index.js
    Created By: Samridhi Bindal
    Student ID: 301172178
    Created on: 02 March, 2021

*/

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* POST from Contact us page. */
router.post('/contact', indexController.processContactInformation);

module.exports = router;
