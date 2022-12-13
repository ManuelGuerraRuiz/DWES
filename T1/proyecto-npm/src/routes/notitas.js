const { application } = require('express');
const express = require('express');

const { crearNotas, editarNotas, eliminarNotas } = require('../controllers/notitas');

const router = express.Router();

router.get('/notas/crear', crearNotas);
router.get('/notas/editar', editarNotas);
router.get('/notas/eliminar', eliminarNotas);

module.exports = router;
