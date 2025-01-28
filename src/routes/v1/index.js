const express = require('express');
const { InfoController } = require('../../controllers');

//router object
const router = express.Router();

//dummy route
router.get('/info', InfoController.info);


//export router
module.exports = router;