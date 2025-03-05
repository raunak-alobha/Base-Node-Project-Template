const { AirportService } = require('../services/index');
const { StatusCodes } = require('http-status-codes');
//import the error and success response
const {SuccessResponse, ErrorResponse} = require('../utils/common/index');

/**
 * POST : /create-airport
 * req-body {name: 'IGI', code: 'DEL', address: 'delhi', cityId: 1}
 */

//create a new airport
const createAirport = async(req, res) => {
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });
        //Success Response
        SuccessResponse.data = airport
        SuccessResponse.message = "Successfully created an airport"
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        //ErrorResponse
        ErrorResponse.error = error
        ErrorResponse.message = "Not able to create an airport"
        // ErrorResponse.error = error
        // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * GET : /get-all-airports
 * req-body {}
 */

// get all airplanes
const getAllAirports = async(req, res) => {
    try {
        const airports = await AirportService.getAirports();
        //Success Response
        SuccessResponse.data = airports;
        SuccessResponse.message = "Successfully fetched all airports"
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        //ErrorResponse
        ErrorResponse.error = error
        ErrorResponse.message = "Not able to fetch all airports"
        // ErrorResponse.error = error
        // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * GET : /get-airport/:id
 * req-body {}
 */

// get a airplane
const getAirport = async(req, res) => {
    try {
        const airport = await AirportService.getAirport(req.params.id);
        //Success Response
        SuccessResponse.data = airport;
        SuccessResponse.message = "Successfully fetched an airport"
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        //ErrorResponse
        ErrorResponse.error = error
        ErrorResponse.message = "Not able to fetch an airport"
        // ErrorResponse.error = error
        // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        return res.status(error.statusCode).json(ErrorResponse);
    }

}

/**
 * DELETE : /delete-airport/:id
 * req-body {}
 */

// delete a airplane
const deleteAirport = async(req, res) => {
    try {
        const airport = await AirportService.deleteAirport(req.params.id);
        //Success Response
        SuccessResponse.data = airport;
        SuccessResponse.message = "Successfully deleted an airport"
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        //ErrorResponse
        ErrorResponse.error = error
        ErrorResponse.message = "Not able to delete an airport"
        // ErrorResponse.error = error
        // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        return res.status(error.statusCode).json(ErrorResponse);
    }

}

/**
 * PATCH : /update-airport/:id
 * req-body {}
 */

// update a airplane
const updateAirport = async(req, res) => {
    try {
        const airport = await AirportService.updateAirport(req.params.id, req.body);
        //Success Response
        SuccessResponse.data = airport;
        SuccessResponse.message = "Successfully updated an airport"
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        //ErrorResponse
        ErrorResponse.error = error
        ErrorResponse.message = "Not able to update an airport"
        // ErrorResponse.error = error
        // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        return res.status(error.statusCode).json(ErrorResponse);
    }

}

// exports the createAirplane function
module.exports = {
    createAirport,
    getAllAirports,
    getAirport,
    deleteAirport,
    updateAirport
}