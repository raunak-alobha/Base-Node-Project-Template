const express = require('express');
const { AirplaneController } = require('../../controllers/index');
const { AirplaneMiddlewares } = require('../../middlewares/index');

//router object
const router = express.Router();

//create a airplane
router.post('/create-airplane', AirplaneMiddlewares.validateCreateRequest, AirplaneController.createAirplane);

//get all airplanes
router.get('/get-all-airplanes', AirplaneController.getAllAirplanes);

//get a airplane
router.get('/get-airplane/:id', AirplaneController.getAirplane);

//delete a airplane
router.delete('/delete-airplane/:id', AirplaneController.deleteAirplane);

//update a airplane
router.patch('/update-airplane/:id', AirplaneController.updateAirplane);



//export the router
module.exports = router;