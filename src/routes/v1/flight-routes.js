const express = require('express');
const { FlightController } = require('../../controllers/index');
const { FlightMiddlewares } = require('../../middlewares/index');

//router object
const router = express.Router();

//create a flight
router.post('/create-flight', FlightMiddlewares.validateCreateRequest, FlightController.createFlight);




//export the router
module.exports = router;