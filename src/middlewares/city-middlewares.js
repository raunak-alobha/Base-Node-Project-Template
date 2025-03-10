const { StatusCodes } = require('http-status-codes');
//import the error and success response\
const { ErrorResponse, SuccessResponse } = require('../utils/common/index');
const AppError = require('../utils/errors/app-error');

//validate the create request
const validateCreateRequest = (req, res, next) => {
    if (!req.body.name) {
        //ErrorResponse
        ErrorResponse.message = 'Something went wrong while creating city';
        ErrorResponse.error = new AppError(['City name is missing in the request'], StatusCodes.BAD_REQUEST);
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
