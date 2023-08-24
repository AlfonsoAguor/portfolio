'use strict'
var Model = require('../models/modelEstudio');
var fs = require('fs');
var path = require('path');

var controller = {
saveEs: function(req,res){
		var es = new Model();

		var params = req.body;
		es.carrer = params.carrer;
		es.startMonth = params.startMonth;
		es.startYear = params.startYear;
		es.endMonth = params.endMonth;
		es.endYear = params.endYear;
		es.sch = params.sch;
		es.location = params.location;

		es.save().then((esStored) => {

			if(!esStored) return res.status(404).send({message: 'No se ha podido guardar'});

			return res.status(200).send({es: esStored});
		}).catch(err => {
			if(err) return res.status(500).send({message: 'Error al guardar', es:es, err});
		});
	},
	getEs: function(req, res){
		var esID = req.params.id;
		if(esID  == null) return res.status(404).send({message: 'no existe'});

		Model.findById(esID).then((es) => {
			if(!es) return res.status(404).send({message: 'No se ha podido guardar'});
			return res.status(200).send({es});
		}).catch((err) => {
			if(err) return res.status(500).send({message: 'Error al devolver los datos'}); 
		});
	},
	getEses: function(req, res){
		Model.find({}).sort({ startYear: -1, startMonth: 1 }).exec().then((eses) => {
			if(!eses) return res.status(404).send({message: 'No hay estudios que mostrar'});
			return res.status(200).send({eses});
		}).catch((err) => {
			if(err) return res.status(500).send({message: 'Error al devolver los datos'}); 
		});
	},
	updateEs: function(req, res){
		var esID = req.params.id;
		var update = req.body;

		Model.findByIdAndUpdate(esID, update, {new:true}).then((esUpdate) =>{
			if(!esUpdate) return res.status(404).send({message: 'No existe los estudios que quieres actualizar'});
			return res.status(200).send({es:esUpdate});
		}).catch((err) => {
			if(err) return res.status(500).send({message: 'Error al actualizar los datos'}); 
		});
	},
	deleteEs: function(req, res) {
	  var esID = req.params.id;

	  // Buscar el proyecto a eliminar
	  Model.findByIdAndRemove(esID)
	    .then(esRemoved => {
	      if (!esRemoved) {
	        return res.status(404).send({ message: 'No existe los estudios que quieres eliminar' });
	      }else {
	      	return res.status(200).send({ es: esRemoved });
	      }
	    })
	    .catch(err => {
	      return res.status(500).send({ message: 'Error al eliminar los estudios' });
	    });
	}
};

module.exports = controller;