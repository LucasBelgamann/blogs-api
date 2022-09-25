const Joi = require('joi');

const validateName = (body) =>
Joi.object({
  name: Joi.string().required(),
}).validate(body);

module.exports = validateName;