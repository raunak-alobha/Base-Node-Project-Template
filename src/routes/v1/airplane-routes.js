const express = require('express');
const { AirplaneController } = require('../../controllers/index');
const { AirplaneMiddlewares } = require('../../middlewares/index');

//router object
const router = express.Router();

//create a airplane
router.post('/create', AirplaneMiddlewares.validateCreateRequest, AirplaneController.createAirplane);

//get all airplanes
router .get('/get-all-airplanes', AirplaneController.getAllAirplanes);



//export the router
module.exports = router;