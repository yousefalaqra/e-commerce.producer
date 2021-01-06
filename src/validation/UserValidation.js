const { body, check } = require('express-validator');

module.exports = {
  create: () => {
    return [
      check("storeProvider", "Store provider is required!").not().isEmpty(),
      check("shopName", "Shop name is required!").not().isEmpty(),
      check("apiKey", "API key is required!").not().isEmpty(),
      check("apiPassword", "API password is required!").not().isEmpty(),
      check("apiVersion", "API version is required!").not().isEmpty(),
    ]
  }
}