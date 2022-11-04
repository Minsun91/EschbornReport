'use strict';
const { Model, Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'mysql'})

// module.exports = (sequelize, DataTypes) => {
  class User extends Sequelize.Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post, {
      foreignKey: 'user_id',
      sourceKey: 'user_id',
    });
    User.hasMany(models.Company, {
      foreignKey: 'user_id',
      sourceKey: 'user_id',
    });
    User.hasMany(models.Like, {
      foreignKey: 'user_id',
      sourceKey: 'user_id',
    });
    }
  }

  User.init({
    userId: DataTypes.INTEGER,
    email: DataTypes.STRING,
    nickname: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  // return User;
// };
module.exports = User