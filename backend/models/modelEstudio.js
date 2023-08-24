'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EsSchema = Schema({
	carrer: String,
	startMonth: Number,
	startYear: Number,
	endMonth: Number,
	endYear: Number,
	sch: String,
	location: String
});

module.exports = mongoose.model('estudio', EsSchema);