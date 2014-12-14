'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors'),
	Scanner = mongoose.model('Scanner'),
	_ = require('lodash');

/**
 * List of Scanners
 */

exports.view = function(req, res) { Scanner.find().sort('-created').populate('user', 'displayName').exec(function(err, scanners) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(scanners);
		}
	});
};


/**
 * Show the current Scanner
 
exports.read = function(req, res) {
	res.jsonp(req.scanner);
};
*/