module.exports = (sequelize, DataTypes) => {
    const User =  sequelize.define('User', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.INTEGER,
      image: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    });
    User.associate = (models) => 
    User.hasMany(models.BlogPost, { 
      as: 'blogPosts',
       foreignKey: 'id' 
      })

    return User;
  };