const {FlightRepository} = require('../repositories/index');
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

// we are creating a new instance of the AirplaneRepository class
const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        // console.log(error);
        if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            console.log(explanation);
            // throw new AppError('Cannot create a new airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new flight object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


// exports the createAirplane function
module.exports = {
    createFlight,

}