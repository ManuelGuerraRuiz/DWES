const express = require('express');

const { rootController } = require('../controllers');
const userRouter = require('./notitas');

const router = express.Router();

router.get('/', rootController);
router.get('/notas/crear', userRouter);
router.get('/notas/editar', userRouter);
router.post('/notas/eliminar', userRouter);

module.exports = router;
