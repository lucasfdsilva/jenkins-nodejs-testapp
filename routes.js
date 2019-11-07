const express = require('express');

//Homepage Controllers
const HomePageController = require('./HomePageController');

//Declaring Router Instances
const openRoutes = express.Router();

//Homepage Routes
openRoutes.get('/', HomePageController.homePage);

module.exports = {
    openRoutes: openRoutes,
}