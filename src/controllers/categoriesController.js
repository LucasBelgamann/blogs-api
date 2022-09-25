const { Category } = require('../models');
require('dotenv').config();
const validateName = require('../middlewares/middlewareName');

const getAll = async (_req, res) => {
    const categories = await Category.findAll({ attributes: ['id', 'name'] });
    res.status(200).json(categories); 
  };

  const createControllerCategory = async (req, res) => {
    const { name } = req.body;
    const { error } = validateName(req.body);
    if (error) {
      return res.status(400).json({ message: '"name" is required' });
    }
  
    const categoryCreate = await Category.create({ name });
  
    res.status(201).json(categoryCreate);
  };

module.exports = {
    getAll,
    createControllerCategory,
};