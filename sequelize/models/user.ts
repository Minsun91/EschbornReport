'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    userId : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull:false
    },
    email: {type:DataTypes.STRING, allowNull: false},
    nickname:{type:DataTypes.STRING, allowNull: false},
    password: {type:DataTypes.STRING, allowNull: false},
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'User',
    timestamps: true,
    underscored: true,
  });
  User.associate = function(models) {
    User.hasMany(models.Post, {
      foreignKey: 'userId',
      targetKey: 'userId',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    User.hasMany(models.Review, {
      foreignKey: 'userId',
      targetKey: 'userId',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    User.hasMany(models.Like, {
      foreignKey: 'userId',
      targetKey: 'userId',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  }
  return User;
};