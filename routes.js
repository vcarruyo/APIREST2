/**
* Main application routes
*/

const helloWorld = require("./api/helloworld");
const product = require('./api/product');

module.exports = (app) => {
	//insert route below
	app.use("/api/helloworld", helloWorld);

	app.use('/api/products', product);

	//Next route
	//Endpoints in plural
	//app.use("/api/users", user);
	//app.use("/api/products", product);

}; 