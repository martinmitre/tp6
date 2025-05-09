let personas = [];
let idCounter = 1;

module.exports = {
    getAll: () => personas,
    getById: id => personas.find(p => p.id === id),
    create: persona => {
        persona.id = idCounter++;
        personas.push(persona);
        return persona;
    },
    update: (id, updated) => {
        const index = personas.findIndex(p => p.id === id);
        if (index !== -1) {
            personas[index] = { id, ...updated };
            return personas[index];
        }
        return null;
    },
    delete: id => {
        const index = personas.findIndex(p => p.id === id);
        if (index !== -1) {
            return personas.splice(index, 1)[0];
        }
        return null;
    }
};
