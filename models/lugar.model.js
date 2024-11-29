let lugares = [
    { id_lugar: 1, nombre: 'Restaurant B', direccion: 'AV 45', tipo: 'Cocina'},
    { id_lugar: 2, nombre: 'Cine', direccion: 'AV 56', tipo: 'entretenimiento' }
];

const generarId = () => (lugares.length ? Math.max(...lugares.map(p => p.id_lugar)) + 1 : 1);

module.exports = {
    getLugares: () => lugares,
    addLugar: (lugar) => {
        const nuevaLugar = { ...lugar, id_lugar: generarId() };
        lugares.push(nuevaLugar);
        return nuevaLugar;
    },
    updateLugar: (id, data) => {
        const index = lugares.findIndex(p => p.id_lugares === id);
        if (index >= 0) {
            lugares[index] = { ...lugares[index], ...data };
            return lugares[index];
        }
        return null;
    },
    deleteLugar: (id) => {
        lugares = lugares.filter(p => p.id_lugar !== id);
    }
};
