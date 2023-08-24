'use strict'
var Model = require('../models/modelExperiencia');
var fs = require('fs');
var path = require('path');

var controller = {
saveEx: function(req,res){
		var ex = new Model();

		var params = req.body;
		ex.site = params.site;
		ex.startMonth = params.startMonth;
		ex.startYear = params.startYear;
		ex.endMonth = params.endMonth;
		ex.endYear = params.endYear;
		ex.details = params.details.split(',');

		ex.save().then((exStored) => {

			if(!exStored) return res.status(404).send({message: 'No se ha podido guardar'});

			return res.status(200).send({ex: exStored});
		}).catch(err => {
			if(err) return res.status(500).send({message: 'Error al guardar', ex:ex, err});
		});
	},
	getEx: function(req, res){
		var exID = req.params.id;
		if(exID  == null) return res.status(404).send({message: 'no existe'});

		Model.findById(exID).then((ex) => {
			if(!ex) return res.status(404).send({message: 'No se ha podido guardar'});
			return res.status(200).send({ex});
		}).catch((err) => {
			if(err) return res.status(500).send({message: 'Error al devolver los datos'}); 
		});
	},
	getExes: function(req, res){
		Model.find({}).sort({ startYear: -1, startMonth: 1 }).exec().then((exes) => {
			if(!exes) return res.status(404).send({message: 'No hay experiencia que mostrar'});
			return res.status(200).send({exes});
		}).catch((err) => {
			if(err) return res.status(500).send({message: 'Error al devolver los datos'}); 
		});
	},
	updateEx: function(req, res){
		var exID = req.params.id;
		var update = req.body;

		Model.findByIdAndUpdate(exID, update, {new:true}).then((exUpdate) =>{
			if(!exUpdate) return res.status(404).send({message: 'No existe la experiencia que quieres actualizar'});
			return res.status(200).send({ex:exUpdate});
		}).catch((err) => {
			if(err) return res.status(500).send({message: 'Error al actualizar los datos'}); 
		});
	},
	deleteEx: function(req, res) {
	  var exID = req.params.id;

	  // Buscar el proyecto a eliminar
	  Model.findByIdAndRemove(esID)
	    .then(exRemoved => {
	      if (!exRemoved) {
	        return res.status(404).send({ message: 'No existe la experiencia que quieres eliminar' });
	      }else {
	      	return res.status(200).send({ ex: exRemoved });
	      }
	    })
	    .catch(err => {
	      return res.status(500).send({ message: 'Error al eliminar la experiencia' });
	    });
	}
};

module.exports = controller;