const CalleModel = require('../models/calle.model');

exports.getCalles = (req, res) => {
    res.json(CalleModel.getCalles());
};

exports.addCalle = (req, res) => {
    const nuevaCalle = CalleModel.addCalle(req.body);
    res.status(201).json(nuevaCalle);
};

exports.updateCalle = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedCalle = CalleModel.updateCalle(id, req.body);
    if (updatedCalle) {
        res.json(updatedCalle);
    } else {
        res.status(404).json({ error: "Calle no encontrada" });
    }
};

exports.deleteCalle = (req, res) => {
    const id = parseInt(req.params.id);
    CalleModel.deleteCalle(id);
    res.status(204).send();
};
