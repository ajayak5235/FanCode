const express = require('express');
const { getTaskStatus } = require('../controllers/taskController');
const authController = require('../controllers/authController')

const router = express.Router();

router.post('/signup', authController.signup);

router.post('/login', authController.login);

router.get('/tasks/status', getTaskStatus);

module.exports = router;
