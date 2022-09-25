const jwt = require('jsonwebtoken');
const { User } = require('../models');
const valideteUser = require('../middlewares/middewareUser');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const createController = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { error } = valideteUser(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const user = await User.findOne({ where: { email } });

  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }

  await User.create({ displayName, email, password, image });

  const payload = {
    email,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
    algorithm: 'HS256',
  });

  res.status(201).json({ token });
};

module.exports = createController;
