let calles = [
    { id_calle: 1, nombre: 'CALLE 1', intersecciones: 'INTERSECCION 1'},
    { id_calle: 2, nombre: 'CALLE 2', intersecciones: 'INTERSECCION 2' }
];

const generarId = () => (calles.length ? Math.max(...calles.map(p => p.id_calle)) + 1 : 1);

module.exports = {
    getCalles: () => calles,
    addCalle: (calle) => {
        const nuevaCalle = { ...calle, id_calle: generarId() };
        calles.push(nuevaCalle);
        return nuevaCalle;
    },
    updateCalle: (id, data) => {
        const index = calles.findIndex(p => p.id_calle === id);
        if (index >= 0) {
            calles[index] = { ...calles[index], ...data };
            return calles[index];
        }
        return null;
    },
    deleteCalle: (id) => {
        calles = calles.filter(p => p.id_calle !== id);
    }
};
