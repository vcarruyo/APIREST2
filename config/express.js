/**
* Express configuration
*/

const compression = require("compression");
const bodyParser = requiere("body-parser");
const methodOverride = require("method-override");
const errorHandler = require("errorHandler");

module.exports = (app) => {
	const env = app.get("env");

	app.use(compression());
	app.use(bodyParser.urlencoded({extended: false, limit: "50mb"}));
	app.use(bodyParser.json({limit: "50mb"}));
	app.use(methodOverride());

	if(env == "development" || env == "test"){
		app.use(errorHandler()); //error handler has to be last 
	}
};
