module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
      id:DataTypes.INTEGER,
      display_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.INTEGER,
      image: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'users',
    });
  };