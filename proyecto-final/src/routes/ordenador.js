const express = require('express');

const { createOrdenador, getOrdenadores} = require('../controllers/ordenador');

const router = express.Router();

router.get('/',getOrdenadores);
router.post('', createOrdenador);


module.exports = router;