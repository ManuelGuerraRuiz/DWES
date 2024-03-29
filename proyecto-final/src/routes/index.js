const express = require('express');

const { rootController } = require('../controllers');
const { createMail } = require('../controllers/smtp')
const userRouter = require('./user');
const ordenadorRouter = require('./ordenador');
const facturaRouter = require('./factura');
const componenteRouter = require('./componente');
const { login } = require('../controllers/login');

const router = express.Router();

router.post('/', rootController);;
router.post('/mail', createMail);
router.use('/user', userRouter);
router.use('/ordenador', ordenadorRouter);
router.use('/factura', facturaRouter);
router.use('/componente', componenteRouter);
router.post('/login', login);


module.exports = router;
