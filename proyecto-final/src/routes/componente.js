const express = require('express');

const { createPlacaBase,createProcesador,createRam,createGrafica,createDiscoDuro,createRefrigeracion,getComponentes} = require('../controllers/componente');

const router = express.Router();

router.post('', createPlacaBase);
router.post('/procesador', createProcesador);
router.post('/ram', createRam);
router.post('/grafica', createGrafica);
router.post('/discoduro', createDiscoDuro);
router.post('/refrigeracion', createRefrigeracion);
router.get('/',getComponentes);



module.exports = router;