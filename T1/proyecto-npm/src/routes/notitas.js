const { application } = require('express');
const express = require('express');

const { createNote, editeNote, deleteNote } = require('../controllers/notitas');

const router = express.Router();

//router.get('/', showNote);
router.post('/', createNote);
router.put('/:name', editeNote);
router.delete('/:name', deleteNote);

module.exports = router;
