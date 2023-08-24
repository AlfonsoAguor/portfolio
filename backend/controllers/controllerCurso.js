'use strict'
var Model = require('../models/modelCurso');
var fs = require('fs');
var path = require('path');

var controller = {
  saveCu: function (req, res) {
    var cu = new Model();

    var params = req.body;
    cu.name = params.name;
    cu.hours = params.hours;
    cu.estado = params.estado;
    cu.title = null;

    cu.save()
      .then((cuStored) => {
        if (!cuStored) return res.status(404).send({ message: 'No se ha podido guardar el curso' });
        return res.status(200).send({ cu: cuStored });
      })
      .catch((err) => {
        if (err) return res.status(500).send({ message: 'Error al guardar', cu: cu, err });
      });
  },

  uploadImage: function (req, res) {
    var CuID = req.params.id;
    var fileName = 'Imagen no subida';

    if (req.files) {
      var filePath = req.files.title.path; //la ruta donde se ha guardado
      var fileSplit = filePath.split('\\'); //lo separamos indicandole un separador
      var fileName = fileSplit[2]; // Almacenaría el nombre dado con la extensión .png
      var extSplit = fileName.split('.'); //separamos mediante el punto de la extensión
      var fileExt = extSplit[1]; //obtenemos únicamente el png

      if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {
        Model.findByIdAndUpdate(CuID, { title: fileName }, { new: true })
          .then((cuUpdate) => {
            if (!cuUpdate) return res.status(404).send({ message: 'No existe el curso' });
            return res.status(200).send({ cu: cuUpdate });
          })
          .catch((err) => {
            if (err) return res.status(500).send({ message: 'La imagen no se ha subido' });
          });
      } else {
        fs.unlink(filePath, (err) => {
          return res.status(200).send({ message: 'La extensión no es válida' });
        });
      }
    } else {
      return res.status(200).send({
        message: fileName,
      });
    }
  },
  getImageFile: function (req, res) {
    var file = req.params.title;
    var path_file = './uploads/curso/' + file;

    fs.exists(path_file, (exists) => {
      if (exists) {
        return res.sendFile(path.resolve(path_file));
      } else {
        return res.status(200).send({
          message: 'No existe la imagen',
        });
      }
    });
  },
	getCu: function(req, res){
		var cuID = req.params.id;
		if(cuID  == null) return res.status(404).send({message: 'no existe'});

		Model.findById(cuID).then((cu) => {
			if(!cu) return res.status(404).send({message: 'No se ha podido guardar el curso'});
			return res.status(200).send({cu});
		}).catch((err) => {
			if(err) return res.status(500).send({message: 'Error al devolver los datos del curso'}); 
		});
	},
	getCus: function(req, res){
		Model.find({}).then((cus) => {
			if(!cus) return res.status(404).send({message: 'No hay cursos que mostrar'});
			return res.status(200).send({cus});
		}).catch((err) => {
			if(err) return res.status(500).send({message: 'Error al devolver los datos del curso'}); 
		});
	},	
	updateCu: function(req, res){
		var cuID = req.params.id;
		var update = req.body;

		Model.findByIdAndUpdate(cuID, update, {new:true}).then((cuUpdate) =>{
			if(!cuUpdate) return res.status(404).send({message: 'No existe el curso que quieres actualizar'});
			return res.status(200).send({cu:cuUpdate});
		}).catch((err) => {
			if(err) return res.status(500).send({message: 'Error al actualizar los datos del curso'}); 
		});
	},
	deleteCu: function(req, res) {
	  var cuID = req.params.id;

	  // Buscar el proyecto a eliminar
	  Model.findByIdAndRemove(cuID)
	    .then(cuRemoved => {
	      if (!cuRemoved) {
	        return res.status(404).send({ message: 'No existe el curso que quieres eliminar' });
	      }

	      if (fs.existsSync('uploads/curso\\' + cuRemoved.title)) {
	        fs.unlink('uploads/curso\\' + cuRemoved.title, (err) => {
	          if (err) {
	            return res.status(500).send({ message: 'Error: la imagen no se ha encontrado' });
	          }
	        });
	      }

	      return res.status(200).send({ cu: cuRemoved });
	    })
	    .catch(err => {
	      return res.status(500).send({ message: 'Error al eliminar el curso' });
	    });
	}
};

module.exports = controller;
