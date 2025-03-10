const express = require('express');
const { InfoController } = require('../../controllers');
const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');
const airportRoutes = require('./airport-routes');
const flightRoutes = require('./flight-routes');

//router object
const router = express.Router();

//airplane routes
router.use('/airplanes', airplaneRoutes);

//city  routes
router.use('/cities', cityRoutes);

//airport routes
router.use('/airports', airportRoutes);

//flight routes
router.use('/flights', flightRoutes);

//dummy route
router.get('/info', InfoController.info);


//export router
module.exports = router;