const express = require('express');

const { rootController } = require('../controllers');
const pingRouter = require('./ping'); 
const fibonacciRouter = require('./fibonacci'); 

const router = express.Router();

router.get('/', rootController);
router.get('/ping', pingRouter);
router.get('/fibonacci', fibonacciRouter);

module.exports = router;