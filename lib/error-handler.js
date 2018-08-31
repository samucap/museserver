const logger = require('../utilities/logger');

module.exports = function errorHandler(err, req, res, next) {
  logger.error({ message: err, correlationId: req.correlationId });
  res.status(err.statusCode || 500).json({ error: err.toString() });
};