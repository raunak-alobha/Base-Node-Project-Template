const CrudRepository = require('./crud-repository');
const { City } = require('../models/index');


// we are extending the CrudRepository class and overriding the create method

class CityRepository extends CrudRepository {
    constructor() {
        super(City);  // super is used to call the constructor of the parent class
    }
}

//exports the AirplaneRepository class
module.exports = CityRepository;