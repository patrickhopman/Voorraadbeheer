'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Scanner Schema
 */
var ScannerSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Scanner name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Scanner', ScannerSchema);