This is a base node js project template, which anyone can use as it has been prepared by keeping some of the important code principles and project management recommendations. Feel free to change anything.


`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of the test cases.(you might have to create a separate folder for test cases)

Let's take a look inside the `src` folder.

- `config` -> In this folder anything and everything regarding any configurations , setup of library or module will be done . For example : setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashing , this is done in the `server-config.js`. One more example can be setup you logging library that can help you to prepare meaningful logs , so configuration for this library should also be done here.

- `routess` -> In the route folder, we register a route and the corresponding middleware and controllers to it.

- `middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc.

- `controllers` -> they are kind of the last middlewares as post them you call business layer to execute the business logic. In controllers we just receive the incoming request and data and then pass it to the business layer, and once business layer returns the output, we structure API response in controller and send the output to the client.

- `repository` -> this folder contains all the logic using which we intract the database by writing queries, all the raw queries or ORM queries will be written here.

- `services` -> this folder contains all the business logic of the application and interacts with repositories for data from the database, this is the layer where you write all the business logic of the application.

- `utils` -> this folder contains helper methods , error handlers , constants and other utility methods.

### Setting up the Project

 - Download this template from github and open it in your text editor 
 - Go inside the folder path and execute the following command :
 ```
 npm install
 ```
 - In the root folder create a .env file and add the following variables :
 ```
 PORT=<port number>
 ```
 example :
 ```
 PORT=3000
 ```


- go inside the `src` folder and execute the following command :
    ```
    npx sequelize init
    ```
- By executing the above command , you will get migrations and seeders folder and a config.json inside the config folder.
- If you are setting up your development environment, then write the name of uour username and password of your db and in diialect mention whatever db you are using. for example : mysql, postgres etc. 

- If you are setting up test or prod environment , make sure you also replace the host with the hosted db url .

- To run the server , execute the following command :
    ```
    npm start
    ```
