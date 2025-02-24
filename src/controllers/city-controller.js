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

/**
 * GET : /get-all-cities
 * req-body {}
 */

// get all airplanes
const getAllCities = async(req, res) => {
    try {
        const cities = await CityService.getCities();
        //Success Response
        SuccessResponse.data = cities;
        SuccessResponse.message = "Successfully fetched all cities"
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        //ErrorResponse
        ErrorResponse.error = error
        ErrorResponse.message = "Not able to fetch all cities"
        // ErrorResponse.error = error
        // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**
 * GET : /get-city/:id
 * req-body {}
 */

// get a city
const getCity = async(req, res) => {
    try {
        const city = await CityService.getCity(req.params.id);
        //Success Response
        SuccessResponse.data = city;
        SuccessResponse.message = "Successfully fetched a city"
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        //ErrorResponse
        ErrorResponse.error = error
        ErrorResponse.message = "Not able to fetch a city"
        // ErrorResponse.error = error
        // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        return res.status(error.statusCode).json(ErrorResponse);
    }

}

/**
 * DELETE : /delete-city/:id
 * req-body {}
 */

// delete a city
const deleteCity = async(req, res) => {
    try {
        const city = await CityService.deleteCity(req.params.id);
        //Success Response
        SuccessResponse.data = city;
        SuccessResponse.message = "Successfully deleted a city"
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch  (error) {
        //ErrorResponse
        ErrorResponse.error = error
        ErrorResponse.message = "Not able to delete a city"
        // ErrorResponse.error = error
        // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        return res.status(error.statusCode).json(ErrorResponse);
    }

}

/**
 * PATCH : /update-city/:id
 * req.body {}
 */

//update a city
const updateAirplane = async(req, res) => {
    try {
        const city = await CityService.updateCity(req.params.id, req.body);
        //Success Response
        SuccessResponse.data = city;
        SuccessResponse.message = "Successfully updated an city"
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        //ErrorResponse
        ErrorResponse.error = error
        ErrorResponse.message = "Not able to update an city"
        // ErrorResponse.error = error
        // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        return res.status(error.statusCode).json(ErrorResponse);
    }

}


//exports
module.exports = {
    createCity,
    getAllCities,
    getCity,
    deleteCity,
    updateAirplane
}