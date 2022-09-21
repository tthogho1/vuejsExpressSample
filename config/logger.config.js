const path = require('path');
const LOG_ROOT_DIR = "logs";

module.exports = {
	appenders: {
		console: { type: 'console' },
		application: {
			type: 'dateFile',
			filename: path.join(LOG_ROOT_DIR, './application.log'),
			pattern: 'yyyyMMdd',
			keepFileExt: true,
			numBackups: 7
		},
		access: {
			type: 'dateFile',
			filename: path.join(LOG_ROOT_DIR, './access.log'),
			pattern: 'yyyyMMdd',
			keepFileExt: true,
			numBackups: 7
		}
	},
	categories: {
		default: {
			appenders: ['console'],
			level: 'ALL'
		},
		application: {
			appenders: ['console', 'application'],
			level: 'INFO'
		},
		access: {
			appenders: ['console', 'access'],
			level: 'INFO'
		}
	}
};