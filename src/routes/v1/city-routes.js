const express = require('express');
const { CityController } = require('../../controllers/index');
const { CityMiddlewares } = require('../../middlewares/index');

//router object
const router = express.Router();

//create a city
router.post('/create-city', CityMiddlewares.validateCreateRequest, CityController.createCity);


//export the router
module.exports = router;