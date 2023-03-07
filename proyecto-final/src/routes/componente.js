const express = require('express');

const { createPlacaBase,createProcesador,createRam,createGrafica,createDiscoDuro,createRefrigeracion,getComponentes,deleteComponente} = require('../controllers/componente');

const router = express.Router();

router.post('/placabase', createPlacaBase);
router.post('/procesador', createProcesador);
router.post('/ram', createRam);
router.post('/grafica', createGrafica);
router.post('/discoduro', createDiscoDuro);
router.post('/refrigeracion', createRefrigeracion);
router.get('',getComponentes);
router.delete('/:referencia',deleteComponente);



module.exports = router;