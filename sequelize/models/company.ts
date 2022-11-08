  import * as Sequelize from 'sequelize';
  import { Model, DataTypes } from 'sequelize';
  import { sequelize } from '../models/sequelize';
  import { dbType } from '.';
  
  class Company extends Model {
    public company_id!: number; 
    public companyName!: string;
    public avgPoint!: number;
    public companyAddress?:string;
    public userId?:number;
    public postId?:number;
    public likeId?:number
  }

  Company.init(
    {
      company_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      avgPoint: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0.00',
      },
      companyAddress: {
        type: Sequelize.STRING,
        allowNull: true,
      }
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Company',
      tableName: 'companies',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );
  
    export const associate=(db:dbType)=> {
      db.Company.hasMany(db.Post, {
        foreignKey: 'company_id',
        sourceKey: 'company_id',
      });
      db.Company.hasMany(db.Like, {
        foreignKey: 'company_id',
        sourceKey: 'company_id',
        onDelete: 'cascade'
      });
      db.Company.belongsTo(db.User,{
        foreignKey:'user_id',
        targetKey:'user_id'
      })
    }
  
  export default Company;
  