function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, next) {
  /* eslint-enable no-unused-vars */
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '-' : err.stack
  });
}

function haltOnTimedout(req, res, next) {
  if (!req.timedout) {
    // const error = new Error(`- Request Time Out - ${req.originalUrl}`);
    next();
  }
}

module.exports = {
  notFound,
  errorHandler,
  haltOnTimedout
};
