'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Like.init({
    likeId: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false}
  }, {
    sequelize,
    modelName: 'Like',
    tableName: 'Like',
    timestamps: true,
    underscored: true
  });
  Like.associate = function(models) {
    Like.belongsTo(models.Post,{
      foreignKey:'postId',
      targetKey: 'postId'
    });
      Like.belongsTo(models.Review,{
        foreignKey:'reviewId',
        targetKey: 'reviewId'
      });
      Like.belongsTo(models.Company,{
        foreignKey:'companyId',
        targetKey: 'companyId'
      });
  }
  return Like;
};