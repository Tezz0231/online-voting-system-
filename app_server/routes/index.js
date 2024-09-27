const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations'); // Assuming this has your home page logic
const ctrlAuth = require('../controllers/login'); // Assuming this has your login logic
const ctrlOthers = require('../controllers/others');
const ctrlResults = require('../controllers/results');
/* GET login page */
router.get('/', ctrlAuth.login); // Set login as the home page

/* POST login handling */
router.post('/login', ctrlAuth.handleLogin); // Handle login submission

/* Locations pages */
router.get('/home', ctrlLocations.homelist); // Redirect here after successful login
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);
router.get('/results', ctrlResults.results);

module.exports = router;
