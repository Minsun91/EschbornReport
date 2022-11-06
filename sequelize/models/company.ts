// import { Model, Sequelize, DataTypes, BuildOptions } from 'sequelize';
// import {sequelize} from './index';

// interface Companyattributes {
//   companyId?:number,
//   postId?: number;
//   userId?: number;
//   address?:string;
//   isLiked?: boolean;
//   isBookmarked?: boolean;
//   companyName: string;
// }

// export interface CompanyModel extends Model<Companyattributes>, Companyattributes { }
// export class Company extends Model<CompanyModel, Companyattributes> { }

// export type CompanyStatic = typeof Model & {
//   new(values?: object, options?: BuildOptions): CompanyModel;
// };

// export function CompanyFactory(sequelize: Sequelize): CompanyStatic {
//   return <CompanyStatic>sequelize.define(
//     'Company',
//     {
//       companyId: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         allowNull: false,
//         unique: true,
//       },
//       address: {
//         type: DataTypes.STRING,
//         allowNull: true
//       },
//       isLiked: {
//         type: DataTypes.BOOLEAN,
//         allowNull: true
//       },
//       isBookmarked: {
//         type: DataTypes.BOOLEAN,
//         allowNull: true
//       }, companyName:{
//         type:DataTypes.STRING,
//         allowNull:false
//       }
//     }, {
//     modelName: 'Company',
//     tableName: 'Company',
//     timestamps: true,
//     underscored: true
//   })
// }


  // Company.associate = function(models) {
  //   Company.belongsTo(models.Post, {
  //     foreignKey:'postId',
  //     targetKey: 'postId',
  //     onDelete: 'cascade',
  //     onUpdate: 'cascade'
  //   });
  //   Company.hasMany(models.Like,{
  //     foreignKey:'companyId',
  //     targetKey:'companyId',
  //   })
  // }
  // return Company;

  import * as Sequelize from 'sequelize';
  import { Model, DataTypes } from 'sequelize';
  import { sequelize } from '../models/sequelize';
  import { dbType } from '.';
  
  class Company extends Model {
    public company_id!: number; 
    public companyName!: string;
    public avgPoint!: number;
    public companyAddress?:string;
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
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: '0',
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
  