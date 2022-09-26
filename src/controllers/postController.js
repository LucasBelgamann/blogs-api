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

  const getById = async (req, res) => {
    const post = await BlogPost.findByPk(req.params.id, {
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

    if (!post) return res.status(404).json({ message: 'Post does not exist' });

    return res.status(200).json(post); 
  };

module.exports = {
    getAll,
    getById,
};