const { AirplaneService } = require('../services/index');
const { StatusCodes } = require('http-status-codes');
//import the error and success response
const {SuccessResponse, ErrorResponse} = require('../utils/common/index');

/**
 * POST : /airplanes
 * req-body {modelNumber: 'airbus320', capacity: 200}
 */
const createAirplane = async(req, res) => {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        //Success Response
        SuccessResponse.data = airplane
        SuccessResponse.message = "Successfully created an airplane"
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        //ErrorResponse
        ErrorResponse.message = "Not able to create an airplane"
        // ErrorResponse.error = error
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        // return res.status(error.StatusCode).json(ErrorResponse);
    }
}

// get all airplanes
const getAllAirplanes = async(req, res) => {
    try {
        const airplanes = await AirplaneService.getAirplanes();
        //Success Response
        SuccessResponse.data = airplanes;
        SuccessResponse.message = "Successfully fetched all airplanes"
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        //ErrorResponse
        ErrorResponse.message = "Not able to fetch all airplanes"
        // ErrorResponse.error = error
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        // return res.status(error.StatusCode).json(ErrorResponse);
    }
}

// exports the createAirplane function
module.exports = {
    createAirplane,
    getAllAirplanes,
}