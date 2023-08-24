'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CuSchema = Schema({
	name: String,
	hours: Number,
	estado: String,
	title: String
});

module.exports = mongoose.model('curso', CuSchema);