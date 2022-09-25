const { Category } = require('../models');

const getAll = async (_req, res) => {
    const categories = await Category.findAll({ attributes: ['id', 'name'] });
    res.status(200).json(categories); 
  };

module.exports = {
    getAll,
};