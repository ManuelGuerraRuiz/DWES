const express = require('express');

const { createUser, getUsers, deleteUser, editUser} = require('../controllers/user');

const router = express.Router();

router.get('/',getUsers);
router.post('', createUser);
router.delete('/:email', deleteUser);
router.put('/:email', editUser);


module.exports = router;
