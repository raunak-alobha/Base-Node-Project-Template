const { StatusCodes } = require('http-status-codes');
//import the error and success response\
const { ErrorResponse, SuccessResponse } = require('../utils/common/index');
const AppError = require('../utils/errors/app-error');

//validate the create request
const validateCreateRequest = (req, res, next) => {
    if (!req.body.name) {
        //ErrorResponse
        ErrorResponse.message = 'Something went wrong while creating airplane';
        ErrorResponse.error = new AppError(['Name is missing in the request'], StatusCodes.BAD_REQUEST);
        // ErrorResponse.error = {
        //     explanation: 'Model number is missing in the request'
        // };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.code) {
        //ErrorResponse
        ErrorResponse.message = 'Something went wrong while creating airplane';
        ErrorResponse.error = new AppError(['Airport Code is missing in the request'], StatusCodes.BAD_REQUEST);
        // ErrorResponse.error = {
        //     explanation: 'Model number is missing in the request'
        // };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if (!req.body.cityId) {
        //ErrorResponse
        ErrorResponse.message = 'Something went wrong while creating airplane';
        ErrorResponse.error = new AppError(['City Id is missing in the request'], StatusCodes.BAD_REQUEST);
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
