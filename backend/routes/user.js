const express = require('express');
const userHandler = require('../handlers/user');
const router = express.Router();

router.post('/signup', userHandler.signup);

module.exports = router;