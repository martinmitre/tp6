let productos = [];
let idCounter = 1;

module.exports = {
    getAll: () => productos,
    getById: id => productos.find(p => p.id === id),
    create: producto => {
        producto.id = idCounter++;
        productos.push(producto);
        return producto;
    },
    update: (id, updated) => {
        const index = productos.findIndex(p => p.id === id);
        if (index !== -1) {
            productos[index] = { id, ...updated };
            return productos[index];
        }
        return null;
    },
    delete: id => {
        const index = productos.findIndex(p => p.id === id);
        if (index !== -1) {
            return productos.splice(index, 1)[0];
        }
        return null;
    }
};
