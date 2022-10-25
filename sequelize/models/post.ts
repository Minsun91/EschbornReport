'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    postId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull:false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull:false},
    content:{ 
      type: DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'Post',
    timestamps: true,
    underscored: true
  });
  Promise.associate = function (models) {
    Promise.belongsTo(models.User, {
      foreignKey: "userId",
      targetKey: "userId",
      onUpdate: "cascade",
      onDelete: "cascade",
      //constraints: false,
    });
    Promise.hasMany(models.Review, {
      foreignKey: "postId",
      sourceKey: "postId",
      onUpdate: "cascade",
      onDelete: "cascade",
    });
    Promise.hasMany(models.Like, {
      foreignKey: "postId",
      sourceKey: "postId",
      onUpdate: "cascade",
      onDelete: "cascade",
    });
  }
  return Post;
};