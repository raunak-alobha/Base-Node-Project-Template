const CrudRepository = require('./crud-repository');
const { Flight } = require('../models/index');


// we are extending the CrudRepository class and overriding the create method

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);  // super is used to call the constructor of the parent class
    }
}

//exports the AirplaneRepository class
module.exports = FlightRepository;     