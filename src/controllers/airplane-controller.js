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
        ErrorResponse.error = error
        ErrorResponse.message = "Not able to create an airplane"
        // ErrorResponse.error = error
        // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * GET : /get-all-airplanes
 * req-body {}
 */

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
        ErrorResponse.error = error
        ErrorResponse.message = "Not able to fetch all airplanes"
        // ErrorResponse.error = error
        // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * GET : /airplanes/:id
 * req-body {}
 */

// get a airplane
const getAirplane = async(req, res) => {
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        //Success Response
        SuccessResponse.data = airplane;
        SuccessResponse.message = "Successfully fetched an airplane"
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        //ErrorResponse
        ErrorResponse.error = error
        ErrorResponse.message = "Not able to fetch an airplane"
        // ErrorResponse.error = error
        // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        return res.status(error.statusCode).json(ErrorResponse);
    }

}

/**
 * DELETE : /delete-airplane/:id
 * req-body {}
 */

// delete a airplane
const deleteAirplane = async(req, res) => {
    try {
        const airplane = await AirplaneService.deleteAirplane(req.params.id);
        //Success Response
        SuccessResponse.data = airplane;
        SuccessResponse.message = "Successfully deleted an airplane"
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        //ErrorResponse
        ErrorResponse.error = error
        ErrorResponse.message = "Not able to delete an airplane"
        // ErrorResponse.error = error
        // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        return res.status(error.statusCode).json(ErrorResponse);
    }

}

/**
 * PATCH : /update-airplanes/:id
 * req-body {}
 */

// update a airplane
const updateAirplane = async(req, res) => {
    try {
        const airplane = await AirplaneService.updateAirplane(req.params.id, req.body);
        //Success Response
        SuccessResponse.data = airplane;
        SuccessResponse.message = "Successfully updated an airplane"
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        //ErrorResponse
        ErrorResponse.error = error
        ErrorResponse.message = "Not able to update an airplane"
        // ErrorResponse.error = error
        // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        return res.status(error.statusCode).json(ErrorResponse);
    }

}

// exports the createAirplane function
module.exports = {
    createAirplane,
    getAllAirplanes,
    getAirplane,
    deleteAirplane,
    updateAirplane
}