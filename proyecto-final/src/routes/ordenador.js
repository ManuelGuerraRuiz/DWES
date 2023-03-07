const express = require('express');

const { createOrdenador, getOrdenadores, editOrdenador, deleteOrdenador} = require('../controllers/ordenador');

const router = express.Router();

router.get('',getOrdenadores);
router.post('', createOrdenador);
router.put('/:referencia', editOrdenador);
router.delete('/:referencia', deleteOrdenador);



module.exports = router;