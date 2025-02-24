const express = require('express');
const { CityController } = require('../../controllers/index');
const { CityMiddlewares } = require('../../middlewares/index');

//router object
const router = express.Router();

//create a city
router.post('/create-city', CityMiddlewares.validateCreateRequest, CityController.createCity);

//get all cities
router.get('/get-all-cities', CityController.getAllCities);

//get a city
router.get('/get-city/:id', CityController.getCity);

//delete a city
router.delete('/delete-city/:id', CityController.deleteCity);

//update a city 
router.patch('/update-city/:id', CityController.updateAirplane)


//export the router
module.exports = router;