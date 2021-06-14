const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/user');
const controller = require('../../controllers')

router.post('/login', (req, res, next) => {
    controller.userController.findUser(req, res);
});

module.exports = router;