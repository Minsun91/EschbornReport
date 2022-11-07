// import {Model, Sequelize, DataTypes, BuildOptions} from 'sequelize'
// import {sequelize} from './index';

// interface LikeAttributes {
//   likeId: number;
//   postId?:number;
//   userId?:number;
//   isLiked?: boolean;
//   isBookMarked?:boolean;
// }

// export interface LikeModel extends Model<LikeAttributes>,LikeAttributes{}
// export class Like extends Model<LikeModel, LikeAttributes> { }

// export type LikeStatic = typeof Model & {
//   new(values?: object, options?: BuildOptions): LikeModel;
// };

// export function LikeFactory(sequelize:Sequelize): LikeStatic{
//   return <LikeStatic>sequelize.define('Like',{
//     likeId: {type: DataTypes.INTEGER, primaryKey: true, allowNull: true},
//     isBookMarked: {type: DataTypes.BOOLEAN, allowNull: false},
//     isLiked: {type: DataTypes.BOOLEAN, allowNull: false}

//   }, {
//     modelName: 'Like',
//     tableName: 'Like',
//     timestamps: true,
//     underscored: true
//   });
// }
  // Like.associate = function(models) {
  //   Like.belongsTo(models.Post,{
  //     foreignKey:'postId',
  //     targetKey: 'postId'
  //   });
  //     Like.belongsTo(models.Review,{
  //       foreignKey:'reviewId',
  //       targetKey: 'reviewId'
  //     });
  //     Like.belongsTo(models.Like,{
  //       foreignKey:'companyId',
  //       targetKey: 'companyId'
  //     });
  // }
  // return Like;

  import * as Sequelize from 'sequelize';
  import { Model, DataTypes } from 'sequelize';
  import { sequelize } from '../models/sequelize';
  import { dbType } from '.';
  
  class Like extends Model {
    public like_id!: number; 
    public isLiked!: boolean;
    public isBookMarked!: boolean;
    public post_id?: number; 
    public user_id?: number;
    public company_id?: number;
  }

  Like.init(
    {
      like_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      isLiked: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      isBookMarked: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      }
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Like',
      tableName: 'likes',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );
  
    export const associate=(db:dbType)=> {
      db.Like.belongsTo(db.Post, {
        foreignKey: 'post_id',
        targetKey: 'post_id',
      });
      db.Like.belongsTo(db.Company, {
        foreignKey: 'company_id',
        targetKey: 'company_id',
      });
      db.Like.belongsTo(db.User, {
        foreignKey: 'user_id',
        targetKey: 'user_id',
      })
    }
  
  export default Like;