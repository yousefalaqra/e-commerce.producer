const reqResponse = require('../../cors/responseHandler');
const userService = require('../../services/userService');
const chalk = require('chalk');
const logger = require('../../eventslogs/logger');

module.exports = {
	customerCreate: async (req, res) => {		
        let data = req.body;
        logger.info('customer creation event from shopify', JSON.stringify(data));
		try {
			res.status(200).send(reqResponse.sucessResponse(200, "Customer Created", "Thanks shopify!!"));
		} catch (error) {
			console.error(error);
			res.status(502).send(reqResponse.errorResponse(502))
		}
	}
}