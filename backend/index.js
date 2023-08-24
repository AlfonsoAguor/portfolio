'use stricts'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/portafolio')
	.then(() => {
		console.log("Conexion con la bese de datos establecida con exito");

		//creacion del Servidor
		app.listen(port, () => {
			console.log("Servidor corriendo correctamente");
		});
	}).catch(err => console.log(err));