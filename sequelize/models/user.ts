// 'use strict';
// import { Sequelize, DataTypes, BuildOptions } from 'sequelize';
// import { Table, Column, Model, HasMany } from 'sequelize-typescript';

// import {sequelize} from './index';

// export interface UserAttributes {
//   userId?:number;
//   email:string;
//   nickname: string;
//   password: string;
//   confirm?: string;
// }

// export interface UserModel extends Model<UserAttributes>, UserAttributes{}
// Table
// export class User extends Model<UserModel, UserAttributes> {}

// export type UserStatic = typeof Model & {
//   new (values?: object, options?: BuildOptions): UserModel;
// };

// export function UserFactory(sequelize:Sequelize): UserStatic{
//   return <UserStatic>sequelize.define(
//     // 'User'
//     Table,
//     {
//       userId : {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         allowNull:false,
//         unique: true
//       },
//       email: {
//         type:DataTypes.STRING, 
//         allowNull: false
//       },
//       nickname:{
//         type:DataTypes.STRING, 
//         allowNull: false
//       },
//       password: {
//         type:DataTypes.STRING, 
//         allowNull: false
//       },
//     }, {
      
//       modelName: 'User',
//       tableName: 'User',
//       timestamps: true,
//       underscored: true,
//     }
//   )
// }


import * as Sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize'; 
import { sequelize } from '../models/sequelize';
import { dbType } from '.';

class User extends Model {
  public user_id!: number; 
  public email!: string;
  public nickname!: string;
  public password!: string;
  public userGrade?: number; //1이면 일반, 2면 기업
  public company_id?: number;
  public post_id?: number;
  public like_id?: number;
}
User.init(
  {
    user_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER, //sequelize.integer에서 바꿔봄..
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      // defaultValue: 'Kim',
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'User',
    tableName: 'users',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  }
);

  export const associate=(db:dbType)=> {
    db.User.hasMany(db.Post, {
      foreignKey: 'user_id',
      sourceKey: 'user_id',
    });
    db.User.hasMany(db.Company, {
      foreignKey: 'user_id',
      sourceKey: 'user_id',
    });
    db.User.hasMany(db.Like, {
      foreignKey: 'user_id',
      sourceKey: 'user_id',
    });
  }

export default User;

