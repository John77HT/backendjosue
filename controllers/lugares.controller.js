const LugarModel = require('../models/lugar.model');

exports.getLugares = (req, res) => {
    res.json(LugarModel.getLugares());
};

exports.addLugar = (req, res) => {
    const nuevaLugar = LugarModel.addLugar(req.body);
    res.status(201).json(nuevaLugar);
};

exports.updateLugar = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedLugar = LugaresModel.updateLugar(id, req.body);
    if (updatedLugar) {
        res.json(updatedLugar);
    } else {
        res.status(404).json({ error: "lugar no encontrado" });
    }
};

exports.deleteLugar = (req, res) => {
    const id = parseInt(req.params.id);
    LugarModel.deleteLugar(id);
    res.status(204).send();
};
