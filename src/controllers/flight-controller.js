const { FlightService } = require('../services/index');
const { StatusCodes } = require('http-status-codes');
//import the error and success response
const {SuccessResponse, ErrorResponse} = require('../utils/common/index');

/**
 * POST : /create-flight
 * req-body {*  
 * flightNumber: 'UK 808',
 *  airplaneId: 'a380',
 *  departureAirportId: 'JFK',
 *  arrivalAirportId: 'LAX',
 *  arrivalTime: '11:10:00',
 *  departureTime: '9:10:00',
 *  price: 2000
 * totalSeats: 120
 * }
 */

//create a new airport
const createFlight = async(req, res) => {
    try {
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats,
        });
        //Success Response
        SuccessResponse.data = flight
        SuccessResponse.message = "Successfully created an flight"
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        //ErrorResponse
        ErrorResponse.error = error
        ErrorResponse.message = "Not able to create an flight"
        // ErrorResponse.error = error
        // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

// exports the createAirplane function
module.exports = {
    createFlight,
}