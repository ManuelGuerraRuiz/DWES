const express = require('express');

const { createNote, editeNote, deleteNote, showNotes } = require('../controllers/notitas');

const router = express.Router();

router.get('/', showNotes);
router.post('/', createNote);
router.put('/:name', editeNote);
router.delete('/:name', deleteNote);

module.exports = router;
