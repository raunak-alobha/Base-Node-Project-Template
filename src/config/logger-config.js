const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

//ciustom log format
const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp}: ${level}: ${message}`;
});

//logger object
const logger = createLogger({
    format: combine(
        timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        myFormat,
    ),
    transports: [new transports.Console(),
        new transports.File({filename: 'combined.log'})
    ],
})

//export logger
module.exports = logger;