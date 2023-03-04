const express = require('express');

const { createFactura, getFacturas, editFactura, deleteFactura} = require('../controllers/factura');

const router = express.Router();

router.get('/',getFacturas);
router.post('', createFactura);
router.put('/:referencia', editFactura);
router.delete('/:referencia', deleteFactura);



module.exports = router;