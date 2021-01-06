const storeProviders = require("../constant/StoresProviders");
const webHocksService = require("./webHocksServices");
const logger = require('../eventslogs/logger');

module.exports = {
  createUser: async (data, params, query) => {
    // sTep 1: build the api path for e-commerce webhock subscrcbtion
    let apiURL = buildApiPath(data);
    // STEP 2: Build the request body payload
    let requestBody = buildRequestBodyPayload();
    // call http clinet service to register into e-commerce store web-hocks
    // let response = webHocksService.subscribeToShopify(apiURL, requestBody);
    // logger.info('register to shopif webhock response', JSON.stringify(response));
  },
};

/// shopify api path fourmall:
/// https://{username}:{password}@{shop}.myshopify.com/admin/api/{api-version}/{resource}.json
/// {username} — The API key that you generated
/// {password} — The API password
/// {shop} - The name that you entered for your development store
/// {api-version} — The supported API version you want to use
/// {resource} — A resource endpoint from the REST admin API
/// ex: https://38b3692b6b48a9712b8d909c46e6208d:c2dc0abbdef5825da69ee1647962ce2d@example.myshopify.com/admin/api/2021-01/products.json

buildApiPath = (data, resource='webhooks') => {
  let apiPath = "";
  switch (data.storeProvider) {
    case storeProviders.SHOPIFY:
      apiPath = `https://${data.apiKey}:${data.apiPassword}@${data.shopName}.myshopify.com/admin/api/${data.apiVersion}/${resource}.json`;
      break;

    default:
      break;
  }

  return apiPath;
};

buildRequestBodyPayload = (
  event = "customers",
  topic = "create",
  address = "??todo",
  format = "json"
) => {
  let object = {
    webhook: {
      topic: `${event}/${topic}`,
      address: address,
      format: format,
    },
  };
  let requestBodyPayload = JSON.stringify(object);

  return requestBodyPayload;
};
