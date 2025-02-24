const {AirplaneRepository} = require('../repositories/index');
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

// we are creating a new instance of the AirplaneRepository class
const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        // console.log(error);
        if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            console.log(explanation);
            throw new AppError('Cannot create a new airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Cannot create a new airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplanes() {
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError("Can't fetch data of all the airplanes", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


// exports the createAirplane function
module.exports = {
    createAirplane,
    getAirplanes,
}