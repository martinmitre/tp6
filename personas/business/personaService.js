const repo = require('../data/personaRepository');

module.exports = {
    getAllPersonas: () => repo.getAll(),
    getPersona: id => repo.getById(id),
    createPersona: data => repo.create(data),
    updatePersona: (id, data) => repo.update(id, data),
    deletePersona: id => repo.delete(id)
};
