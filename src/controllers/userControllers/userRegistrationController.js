const { validationResult } = require('express-validator');
const reqResponse = require('../../cors/responseHandler');
const userService = require('../../services/userService')

module.exports = {
	createUser: async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(402).send(reqResponse.errorResponse(402));
		}
		let data = req.body;
		let params = req.params;
		let query = req.query;
		try {
			let result = await userService.createUser(data, params, query);
			res.status(201).send(reqResponse.sucessResponse(201, "User Created", "User has been created successfully"));
		} catch (error) {
			console.error(error);
			res.status(502).send(reqResponse.errorResponse(502))
		}
	}
}