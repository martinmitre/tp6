const express = require('express');
const router = express.Router();
const service = require('../business/personaService');

router.get('/', (req, res) => res.json(service.getAllPersonas()));
router.get('/:id', (req, res) => res.json(service.getPersona(parseInt(req.params.id))));
router.post('/', (req, res) => res.json(service.createPersona(req.body)));
router.put('/:id', (req, res) => res.json(service.updatePersona(parseInt(req.params.id), req.body)));
router.delete('/:id', (req, res) => res.json(service.deletePersona(parseInt(req.params.id))));

module.exports = router;
