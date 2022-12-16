const { application } = require('express');
const express = require('express');

const { createNote, editeNote, deleteNote } = require('../controllers/notitas');

const router = express.Router();

router.get('/', showNote);
router.post('/notas/', createNote);
router.put('/notas/:name', editeNote);
router.delete('/notas/:name', deleteNote);

module.exports = router;
