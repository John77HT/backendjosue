// Dependencias
const peliculaModel = require('../models/pelicula.model');
const generoModel = require('../models/genero.model');
const peliculasController = require('../controllers/peliculas.controller');
const generosController = require('../controllers/generos.controller');
const lugaresController = require('../controllers/lugares.controller');
const lugaresModel = require('./models/lugar.model');
const calleModel = require('./models/calle.model');
const callesController = require('../controllers/calles.controller');

class AppManager {
    #models;
    #controllers;

    constructor() {
        this.#models = {
            peliculaModel,
            generoModel,
            lugaresModel,
            calleModel,
        };
        this.#controllers = {
            peliculasController,
            generosController,
            lugaresController,
            callesController
        };
        Object.preventExtensions(this); // Evita añadir nuevas propiedades
    }

    // Obtener los modelos
    getModels() {
        return this.#models;
    }

    // Obtener los controladores
    getControllers() {
        return this.#controllers;
    }
}

module.exports = AppManager;
