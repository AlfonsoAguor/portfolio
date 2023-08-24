'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExSchema = Schema({
	site: String,
	startMonth: Number,
	startYear: Number,
	endMonth: Number,
	endYear: Number,
	details: [String]
});

module.exports = mongoose.model('experiencia', ExSchema);
