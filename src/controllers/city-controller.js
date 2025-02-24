const { CityService } = require('../services/index');
const { StatusCodes } = require('http-status-codes');
//import the error and success response
const {SuccessResponse, ErrorResponse} = require('../utils/common/index');


/**
 * POST : /create-city
 * req-body {name: 'Delhi'}
 */
const createCity = async(req, res) => {
    try {
        const city = await CityService.createCity({
            name: req.body.name
        });
        //Success Response
        SuccessResponse.data = city
        SuccessResponse.message = "Successfully created an city"
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        //ErrorResponse
        ErrorResponse.error = error
        ErrorResponse.message = "Not able to create an city"
        // ErrorResponse.error = error
        // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        return res.status(error.statusCode).json(ErrorResponse);
    }
}



//exports
module.exports = {
    createCity
}