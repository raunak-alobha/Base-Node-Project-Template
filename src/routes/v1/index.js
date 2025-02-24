const express = require('express');
const { InfoController } = require('../../controllers');
const airplaneRoutes = require('./airplane-routes');

//router object
const router = express.Router();

//airplane routes
router.use('/airplanes', airplaneRoutes);

//dummy route
router.get('/info', InfoController.info);


//export router
module.exports = router;