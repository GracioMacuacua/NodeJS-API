'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');
const authService = require('../services/auth-service');

router.get('/:id', authService.authorize, controller.getById);
router.post('/', controller.post);

module.exports = router;