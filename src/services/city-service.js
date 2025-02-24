const {CityRepository} = require('../repositories/index');
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

// we are creating a new instance of the CityRepository class
const cityRepository = new CityRepository();

async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        // console.log(error);
        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            // console.log(explanation);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new city object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

//exports
module.exports = {
    createCity
}