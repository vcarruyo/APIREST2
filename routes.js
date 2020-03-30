/**
* Main application routes
*/

const helloWorld = require("./api/helloworld");

module.exports = (app) => {
	//insert route below
	app.use("/api/helloworld", helloWorld);

	//Next route
	//Endpoints in plural
	//app.use("/api/users", user);
	//app.use("/api/products", product);

}; 