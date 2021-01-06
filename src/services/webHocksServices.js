const axios = require('axios').default;


module.exports = {
    subscribeToShopify: async (apiURL, requestBody) =>{
        const response = await axios.post(apiURL, requestBody);
        return response;
    }
}