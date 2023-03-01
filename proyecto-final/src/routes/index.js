const express = require('express');

const { rootController } = require('../controllers');
const { getUsers } = require('../controllers/user');
const smtpController = require('../controllers/smtp');
const userRouter = require('./user');
const ordenadorRouter = require('./ordenador');

const router = express.Router();

router.post('/', rootController);;
router.get('/user', getUsers);
router.post('/mail', smtpController.createMail);
router.use('/user', userRouter);
router.use('/ordenador', ordenadorRouter);


module.exports = router;
