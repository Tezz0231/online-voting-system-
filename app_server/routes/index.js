const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const ctrlResults = require('../controllers/results');
const ctrlAuth = require('../controllers/login'); // Assuming you have an auth controller

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);
router.get('/results', ctrlResults.results);

/* Login page */
router.get('/login', ctrlAuth.login); // Route to the login page

module.exports = router;
