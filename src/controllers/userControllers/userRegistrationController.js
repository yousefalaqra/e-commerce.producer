const { validationResult } = require('express-validator');
const reqResponse = require('../../cors/responseHandler');
const userService = require('../../services/userService');
const chalk = require('chalk');

module.exports = {
	createUser: async (req, res) => {
		console.log(chalk.red(`request from a client with the following body payload: ${JSON.stringify(req.body)}`));
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(402).send(reqResponse.errorResponse(402));
		}
		let data = req.body;
		let params = req.params;
		let query = req.query;
		try {
			let result = await userService.createUser(data, params, query);
			res.status(201).send(reqResponse.sucessResponse(201, "User Created", "Subscribed to web hock successfully"));
		} catch (error) {
			console.error(error);
			res.status(502).send(reqResponse.errorResponse(502))
		}
	}
}