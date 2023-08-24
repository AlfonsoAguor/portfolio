'use strict'
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar archivos de rutas
var ex_routes = require('./routes/routes');

//middlewares -- Esto es lo primero que se ejecuta
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //en caso de publicar la web, se sustituye el * por la web
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Rutas
app.use('/api', ex_routes);

//exportar
module.exports = app;