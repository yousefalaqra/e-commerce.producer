const router = require('express').Router();
const StoreController = require('../../controllers/storesControllers/customerController');
const RouteConstant = require('../../constant/Routes');

module.exports = (app) => {
  router.route('/create')
    .post(
      StoreController.customerCreate
    );

  app.use(
    RouteConstant.CUSTOMER,
    router
  );
};