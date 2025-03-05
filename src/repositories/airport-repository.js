const CrudRepository = require('./crud-repository');
const { Airport } = require('../models/index');


// we are extending the CrudRepository class and overriding the create method

class AirportRepository extends CrudRepository {
    constructor() {
        super(Airport);  // super is used to call the constructor of the parent class
    }
}

//exports the AirplaneRepository class
module.exports = AirportRepository;