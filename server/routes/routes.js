const express = require('express');
const userController = require('../controller/user-controller');

const routes = express.Router();

routes.route('/authenticate')
.post(userController.authenticate);

module.exports = routes;