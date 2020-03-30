/**
* Show Hello 
*/

function index(req, res){
	res.status(200).json({message: "hello World"});
};

module.exports = { index };