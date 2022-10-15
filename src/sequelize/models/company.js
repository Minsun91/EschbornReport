'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Company.init({
    companyId :{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    address: {type: DataTypes.STRING, allowNull: false},
    Like: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Company',
    tableName: 'Company',
    timestamps: true,
    underscored: true
  });
  Company.associate = function(models) {
    Company.belongsTo(models.Post, {
      foreignKey:'postId',
      targetKey: 'postId',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    Company.hasMany(models.Like,{
      foreignKey:'companyId',
      targetKey:'companyId',
    })
  }
  return Company;
};