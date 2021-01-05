const router = require('express').Router();
const UserController = require('../../controllers/userControllers/userRegistrationController');
const RouteConstant = require('../../constant/Routes');
const Validation = require('../../validation/UserValidation')

module.exports = (app) => {
  router.route('/create')
    .post(
      Validation.create(),
      UserController.createUser
    );

  app.use(
    RouteConstant.USER,
    router
  );
};