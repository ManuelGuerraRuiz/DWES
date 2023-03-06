function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode < 500 ? err.statusCode : 500;
    res.status(statusCode).send({ code: statusCode, message });
  }
  
  module.exports = errorHandler;