const express = require('express');

const companyRouter = express.Router();

companyRouter.route('/signup')
.post(postCompany);

module.exports = companyRouter;