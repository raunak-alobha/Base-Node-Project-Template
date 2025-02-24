const express = require('express');
const { CityController } = require('../../controllers/index');

//router object
const router = express.Router();

//create a city
router.post('/create-city', CityController.createCity);


//export the router
module.exports = router;