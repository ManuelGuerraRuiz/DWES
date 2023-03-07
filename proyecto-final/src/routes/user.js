const express = require('express');

const { createUser, getUsers, deleteUser, editUser} = require('../controllers/user');

const router = express.Router();

router.get('',getUsers);
router.post('', createUser);
router.put('/:email', editUser);
router.delete('/:email', deleteUser);

module.exports = router;
