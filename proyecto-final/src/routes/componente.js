const express = require('express');

const { createPlacaBase, getComponentes} = require('../controllers/componente');

const router = express.Router();

router.post('', createPlacaBase);
router.get('/',getComponentes);



module.exports = router;