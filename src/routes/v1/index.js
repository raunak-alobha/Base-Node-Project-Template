const express = require('express');
const { InfoController } = require('../../controllers');
const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');

//router object
const router = express.Router();

//airplane routes
router.use('/airplanes', airplaneRoutes);

//city  routes
router.use('/cities', cityRoutes);

//dummy route
router.get('/info', InfoController.info);


//export router
module.exports = router;