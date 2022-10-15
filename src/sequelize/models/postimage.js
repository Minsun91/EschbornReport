'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PostImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PostImage.init({
    postImageId : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    PostImageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PostImage',
    tableName: 'PostImage',
    underscored: true,
  });
  PostImage.associate = function(models){
    PostImage.belongsTo(modles.Post,{
      foreignKey: 'postId',
      targetKey: 'postId',
      onUpdate: 'cascade',
      onDelete:'cascade'
    })
  }
  return PostImage;
};