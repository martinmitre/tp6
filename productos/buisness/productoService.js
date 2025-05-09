const repo = require('../data/productoRepository');

module.exports = {
    getAllProductos: () => repo.getAll(),
    getProducto: id => repo.getById(id),
    createProducto: data => repo.create(data),
    updateProducto: (id, data) => repo.update(id, data),
    deleteProducto: id => repo.delete(id)
};
