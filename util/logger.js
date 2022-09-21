const log4js = require('log4js');
const config = require('../config/logger.config');

log4js.configure(config);

exports.DefaultLogger = log4js.getLogger();
exports.AppLogger = log4js.getLogger('application');
exports.AccessLogger = log4js.getLogger('access');