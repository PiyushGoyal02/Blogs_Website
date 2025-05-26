const express = require('express');
const route = express.Router();

const { authSignup, authLogin } = require('../Controllers/Auth');

route.post('/signup', authSignup);
route.post('/login', authLogin);

module.exports = route;
