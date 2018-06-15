// This file contains logic for routing
const express = require('express');
const indexController = require('../controllers/indexController');

const router = express.Router();

/* GET home page. */
router.get('/', indexController.homePage);
router.get('/about', indexController.about);
router.get('/projects', indexController.projects);
router.get('/services', indexController.services);
router.get('/contact', indexController.contact);
router.post('/contact', indexController.send);

module.exports = router;
