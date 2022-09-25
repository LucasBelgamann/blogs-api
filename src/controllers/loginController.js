const jwt = require('jsonwebtoken');
const { User } = require('../models');
const validateEmailPassword = require('../middlewares/middlewareLogin');
require('dotenv').config();

const { JWT_SECRET } = process.env;

module.exports = async (req, res) => {
  const { error } = validateEmailPassword(req.body);

  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const user = await User.findOne({ where: { email: req.body.email } }); 

  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const payload = {
    email: req.body.email,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
    algorithm: 'HS256',
  });

  res.status(200).json({ token });
};