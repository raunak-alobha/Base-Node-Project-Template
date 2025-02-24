const { Logger } = require('../config/index');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');

class CrudRepository {

    constructor(model) {  // model is a sequelize model
        this.model = model;
    }

    async create(data) {
        // try {
            const response = await this.model.create(data);  // create is a method provided by sequelize to create a record
            return response;
        // } catch (error) {
        //     Logger.error("Something went wrong in crud repo: create");
        //     throw error;
        // }
    }

    async destroy(data) {
        // try {
            const response = await this.model.destroy({  // destroy is a method provided by sequelize to delete a record
                where: {
                    id: data
                }
            });
            return response;
        // } catch (error) {
        //     Logger.error("Something went wrong in crud repo: destroy");
        //     throw error;
        // }
    }

    async get(data) {
        // try {
            const response = await this.model.findByPk(data);  // findByPk is a method provided by sequelize to find a record by its primary key
            if(!response) {
                throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND);
            }
            return response;
        // } catch (error) {
        //     Logger.error("Something went wrong in crud repo: get");
        //     throw error;
        // }
    }

    async getAll() {
        // try {
            const response = await this.model.findAll();  // findAll is a method provided by sequelize to find all records
            return response;
        // } catch (error) {
        //     Logger.error("Something went wrong in crud repo: getAll");
        //     throw error;
        // }
    }

    async update(id, data) {
        // try {
            const response = await this.model.update(data, {  // update is a method provided by sequelize to update a record 
                where: {                                      
                    id: id
                }
            });
            return response;
        // } catch (error) {
        //     Logger.error("Something went wrong in crud repo: update");
        //     throw error;
        // }
    }
}

//export the CrudRepository class

module.exports = CrudRepository;