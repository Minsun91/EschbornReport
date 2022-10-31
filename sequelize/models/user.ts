'use strict';
import { Model, Sequelize, DataTypes, BuildOptions } from 'sequelize';

export interface UserAttributes {
  userId?:number;
  email:string;
  nickname: string;
  password: string;
  confirm?: string;
}

export interface UserModel extends Model<UserAttributes>, UserAttributes{}
export class User extends Model<UserModel, UserAttributes> {}

export type UserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserModel;
};

export function UserFactory(sequelize:Sequelize): UserStatic{
  return <UserStatic>sequelize.define(
    'User',
    {
      userId : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
        unique: true
      },
      email: {
        type:DataTypes.STRING, 
        allowNull: false
      },
      nickname:{
        type:DataTypes.STRING, 
        allowNull: false
      },
      password: {
        type:DataTypes.STRING, 
        allowNull: false
      },
    }, {
      
      modelName: 'User',
      tableName: 'User',
      timestamps: true,
      underscored: true,
    }
  )
}

  // User.associate = function(models) {
  //   User.hasMany(models.Post, {
  //     foreignKey: 'userId',
  //     targetKey: 'userId',
  //     onDelete: 'cascade',
  //     onUpdate: 'cascade'
  //   });
  //   User.hasMany(models.Review, {
  //     foreignKey: 'userId',
  //     targetKey: 'userId',
  //     onDelete: 'cascade',
  //     onUpdate: 'cascade'
  //   });
  //   User.hasMany(models.Like, {
  //     foreignKey: 'userId',
  //     targetKey: 'userId',
  //     onDelete: 'cascade',
  //     onUpdate: 'cascade'
  //   });
  // }
