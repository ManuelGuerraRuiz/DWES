const express = require('express');

const { rootController } = require('../controllers');
const notasRouter = require('./notitas');
const { showNotes } = require('../controllers/notitas');
const smtpController = require('../controllers/smtp');
const userRouter = require('./user');

const router = express.Router();

router.post('/', rootController);
router.use('/notas', notasRouter);
router.get('/notas', showNotes);
router.post('/mail', smtpController.createMail);
router.use('/user', userRouter);


module.exports = router;
