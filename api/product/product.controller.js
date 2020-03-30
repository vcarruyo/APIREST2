/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/products           ->  index
 * GET     /api/products/:id       ->  show
 * POSG    /api/products           ->  create
 */
 
const Product = require('./product.model');

// Gets a list of products
function index(req, res) {
  return Product.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Create product
function create(req, res) {
  return Product.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Gets a single product from the DB
function show(req, res) {
  return Product.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

function update(req, res) {
  return Product.findByIdAndUpdate(req.params.id, req.body).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

function destroy(req, res) {
  return Product.findByIdAndRemove(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

function respondWithResult(res, code) {
  const statusCode = code || 200;
  return (entity) => {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return (entity) => {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, code) {
  const statusCode = code || 500;
  return (err) => {
    res.status(statusCode).send(err);
  };
}

module.exports = {
  create,
  show,
  index,
  update,
  destroy,
  respondWithResult,
  handleEntityNotFound,
  handleError
};