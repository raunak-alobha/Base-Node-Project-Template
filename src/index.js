const express = require('express');
const { ServerConfig } = require('./config/index');
const  apiRoutes = require('./routes/index');
const { info } = require('winston');

//app object
const app = express();

//json middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api', apiRoutes);


//listten to the port
app.listen(ServerConfig.PORT, async() => {
    console.log(`Server started on port ${ServerConfig.PORT}`);
    //bad code alert
    // const {City, Airport} = require('./models/index');
    // const city = await City.findByPk(1);
    // console.log(city);
});