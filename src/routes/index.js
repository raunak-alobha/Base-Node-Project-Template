const express = require('express');
//load routes
const v1Routes = require('./v1/index');

//router object
const router = express.Router();

//for v1 routes
router.use('/v1', v1Routes);

//export router
module.exports = router;