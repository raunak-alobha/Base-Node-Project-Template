const express = require('express');
const { AirportController } = require('../../controllers/index');
const { AirportMiddlewares } = require('../../middlewares/index');

//router object
const router = express.Router();

//create a airport
router.post('/create-airport', AirportMiddlewares.validateCreateRequest, AirportController.createAirport);

//get all airports
router.get('/get-all-airports', AirportController.getAllAirports);

//get a airport
router.get('/get-airport/:id', AirportController.getAirport);

//delete a airport
router.delete('/delete-airport/:id', AirportController.deleteAirport);

//update a airport
router.patch('/update-airport/:id', AirportController.updateAirport);



//export the router
module.exports = router;