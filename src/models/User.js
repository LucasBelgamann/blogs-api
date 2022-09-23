module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
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