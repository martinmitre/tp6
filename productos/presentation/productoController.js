const express = require('express');
const router = express.Router();
const service = require('../business/productoService');

router.get('/', (req, res) => res.json(service.getAllProductos()));
router.get('/:id', (req, res) => res.json(service.getProducto(parseInt(req.params.id))));
router.post('/', (req, res) => res.json(service.createProducto(req.body)));
router.put('/:id', (req, res) => res.json(service.updateProducto(parseInt(req.params.id), req.body)));
router.delete('/:id', (req, res) => res.json(service.deleteProducto(parseInt(req.params.id))));

module.exports = router;
