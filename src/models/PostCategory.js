module.exports = (sequelize, DataTypes) => {
    const PostCategory =  sequelize.define('PostCategory', {
      categoryId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
    },
      postId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
    },
    },
    {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true,
    });
    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            foreignKey: 'category_id',
            through: 'PostCategory',
            as: 'categories',
        });
        models.Category.belongsToMany(models.BlogPost, {
            foreignKey: 'post_id',
            through: 'PostCategory',
            as: 'blogPosts',
          });
      };
      return PostCategory;
  };