const { StatusCodes } = require('http-status-codes');
//import the error and success response\
const { ErrorResponse, SuccessResponse } = require('../utils/common/index');
const AppError = require('../utils/errors/app-error');

//validate the create request
const validateCreateRequest = (req, res, next) => {
    if (!req.body.flightNumber) {
        //ErrorResponse
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['flightNumber is missing in the request'], StatusCodes.BAD_REQUEST);
        // ErrorResponse.error = {
        //     explanation: 'Model number is missing in the request'
        // };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.airplaneId) {
        //ErrorResponse
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['airplaneId is missing in the request'], StatusCodes.BAD_REQUEST);
        // ErrorResponse.error = {
        //     explanation: 'Model number is missing in the request'
        // };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.departureAirportId) {
        //ErrorResponse
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['departureAirportId is missing in the request'], StatusCodes.BAD_REQUEST);
        // ErrorResponse.error = {
        //     explanation: 'Model number is missing in the request'
        // };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.arrivalAirportId) {
        //ErrorResponse
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['arrivalAirportId is missing in the request'], StatusCodes.BAD_REQUEST);
        // ErrorResponse.error = {
        //     explanation: 'Model number is missing in the request'
        // };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.arrivalTime) {
        //ErrorResponse
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['arrivalTime is missing in the request'], StatusCodes.BAD_REQUEST);
        // ErrorResponse.error = {
        //     explanation: 'Model number is missing in the request'
        // };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.departureTime) {
        //ErrorResponse
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['departureTime is missing in the request'], StatusCodes.BAD_REQUEST);
        // ErrorResponse.error = {
        //     explanation: 'Model number is missing in the request'
        // };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.price) {
        //ErrorResponse
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['price is missing in the request'], StatusCodes.BAD_REQUEST);
        // ErrorResponse.error = {
        //     explanation: 'Model number is missing in the request'
        // };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.totalSeats) {
        //ErrorResponse
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['totalSeats is missing in the request'], StatusCodes.BAD_REQUEST);
        // ErrorResponse.error = {
        //     explanation: 'Model number is missing in the request'
        // };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}
