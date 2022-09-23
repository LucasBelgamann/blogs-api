const Joi = require('joi');

const validateEmailPassword = (body) =>
Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
}).validate(body);

module.exports = validateEmailPassword;