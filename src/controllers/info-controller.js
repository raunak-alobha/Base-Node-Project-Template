const {StatusCodes} = require('http-status-codes');


const info = (req, res) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        message: 'Hello from API',
        error: {},
        data: {},
    });
};

//export controller
module.exports = {
    info,
};