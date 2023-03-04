const express = require('express');

const { createPlacaBase,createProcesador, getComponentes} = require('../controllers/componente');

const router = express.Router();

router.post('', createPlacaBase);
router.post('/procesador', createProcesador);
router.get('/',getComponentes);



module.exports = router;