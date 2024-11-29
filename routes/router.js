const express = require('express');
const router = express.Router();

// Controladores
const PeliculasController = require('../controllers/peliculas.controller');
const GenerosController = require('../controllers/generos.controller');
const LugaresController = require('../controllers/lugares.controller');
const CallesController = require('../controllers/calles.controller');

// Rutas para películas
router.get('/api/peliculas', PeliculasController.getPeliculas);
router.post('/api/peliculas', PeliculasController.addPelicula);
router.put('/api/peliculas/:id', PeliculasController.updatePelicula);
router.delete('/api/peliculas/:id', PeliculasController.deletePelicula);

// Rutas para géneros
router.get('/api/genero', GenerosController.getGeneros);
router.post('/api/genero', GenerosController.addGenero);
router.put('/api/genero/:id_genero', GenerosController.updateGenero);
router.delete('/api/genero/:id_genero', GenerosController.deleteGenero);

// Rutas para lugares
router.get('/api/lugares', LugaresController.getLugares);
router.post('/api/lugares', LugaresController.addLugar);
router.put('/api/lugares/:id', LugaresController.updateLugar);
router.delete('/api/lugares/:id', LugaresController.deleteLugar);

// Rutas para calles
router.get('/api/calles', CallesController.getCalles);
router.post('/api/calles', CallesController.addCalle);
router.put('/api/calles/:id', CallesController.updateCalle);
router.delete('/api/calles/:id', CallesController.deleteCalle);

module.exports = router;
