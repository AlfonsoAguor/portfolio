'use strict'
var express = require('express');
var ExController = require('../controllers/controllerExperiencia');
var EsController = require('../controllers/controllerEstudio');
var CuController = require('../controllers/controllerCurso');

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddlewareCu = multipart({uploadDir:'./uploads/curso'});

/*Rutas experiencia*/
router.post('/save-ex', ExController.saveEx);
router.get('/ex/:id?', ExController.getEx);
router.get('/exes', ExController.getExes);
router.put('/ex/:id?', ExController.updateEx);
router.delete('/ex/:id?', ExController.deleteEx);

/*Rutas estudios*/
router.post('/save-es', EsController.saveEs);
router.get('/es/:id?', EsController.getEs);
router.get('/eses', EsController.getEses);
router.put('/es/:id?', EsController.updateEs);
router.delete('/es/:id?', EsController.deleteEs);

/*Rutas Cursos*/
router.post('/save-cu', CuController.saveCu);
router.post('/upload-image-cu/:id', multipartMiddlewareCu, CuController.uploadImage);
router.get('/get-image-cu/:title', CuController.getImageFile);
router.get('/cu/:id?', CuController.getCu);
router.get('/cus', CuController.getCus);
router.put('/cu/:id?', CuController.updateCu);
router.delete('/cu/:id?', CuController.deleteCu);

/*router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/project/:id?', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.deleteProject);
router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadImage);
router.get('/get-image/:image', ProjectController.getImageFile);*/


module.exports = router;