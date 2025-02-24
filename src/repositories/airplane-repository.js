const CrudRepository = require('./crud-repository');
const { Airplane } = require('../models/index');


// we are extending the CrudRepository class and overriding the create method

class AirplaneRepository extends CrudRepository {
    constructor() {
        super(Airplane);  // super is used to call the constructor of the parent class
    }
}

//exports the AirplaneRepository class
module.exports = AirplaneRepository;