const { User, Category, BlogPost } = require('../models');

const getAll = async (_req, res) => {
    const post = await BlogPost.findAll({
        include: [
            { 
              model: User, 
              as: 'user', 
              attributes: { exclude: ['password'] },
            },
            {
              model: Category,
              as: 'categories',
            },
        ],
      });
    return res.status(200).json(post); 
  };

module.exports = {
    getAll,
};