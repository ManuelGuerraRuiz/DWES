const express = require('express');

const { createUser} = require('../controllers/user');
const { deleteUser} = require('../controllers/user');
const { editUser } = require('../controllers/user');

const router = express.Router();


router.post('', createUser);
router.delete('/:email', deleteUser);
router.put('/:email', editUser);


module.exports = router;
