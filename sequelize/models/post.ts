// import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
// import {sequelize} from './index';

// export interface PostAttributes {
//   postId?: number;
//   userId?: number;
//   title: string;
//   content: string;
//   isLiked?: boolean;
//   isBookmarked?:boolean;
//   companyName: string;
// }

// export interface PostModel extends Model<PostAttributes>, PostAttributes {}
// export class Post extends Model<PostModel, PostAttributes> {}

// export type PostStatic = typeof Model & {
//   new (values?: object, options?: BuildOptions): PostModel;
// };

// export function PostFactory(sequelize: Sequelize): PostStatic {
//   return <PostStatic>sequelize.define(
//     'Post',
//     {
//       postId: {
//           type: DataTypes.INTEGER,
//           primaryKey: true,
//           allowNull:false,
//         },
//         title: {
//           type: DataTypes.STRING,
//           allowNull:false
//         },
//         content:{ 
//           type: DataTypes.STRING,
//           allowNull:false
//         },
//         isLiked: {
//           type: DataTypes.BOOLEAN,
//           allowNull:true
//         },
//         companyName:{
//           type: DataTypes.STRING,
//           allowNull:false
//         }
//       }, {
//         modelName: 'Post',
//     tableName: 'Post',
//     timestamps: true,
//     underscored: true
//       }
//   );
// };

  // Promise.associate = function (models) {
  //   Promise.belongsTo(models.User, {
  //     foreignKey: "userId",
  //     targetKey: "userId",
  //     onUpdate: "cascade",
  //     onDelete: "cascade",
  //     //constraints: false,
  //   });
  //   Promise.hasMany(models.Review, {
  //     foreignKey: "postId",
  //     sourceKey: "postId",
  //     onUpdate: "cascade",
  //     onDelete: "cascade",
  //   });
  //   Promise.hasMany(models.Like, {
  //     foreignKey: "postId",
  //     sourceKey: "postId",
  //     onUpdate: "cascade",
  //     onDelete: "cascade",
  //   });
  // }

import * as Sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../models/sequelize';
import { dbType } from '.';

class Post extends Model {
  public post_id!: number; 
  public companyName!: String;
  public review!: string;
  public workingHour!: number;
  public salary!: number;
  public holiday!: number;
  public benefit!: number;
  public user_id?: number;
  public company_id?: number;
}
Post.init(
  {
    post_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    companyName: {
      type:Sequelize.STRING,
      allowNull: false
    },
    review: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    workingHour: {
      type: Sequelize.INTEGER,
      allowNull: false,
      // defaultValue: '아무개',
    },
    salary: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    holiday: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    benefit: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'Post',
    tableName: 'posts',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  }
);

  export const associate=(db:dbType)=> {
    db.Post.belongsTo(db.Company, {
      foreignKey: 'company_id',
      targetKey: 'company_id',
    });
    db.Post.hasMany(db.Like, {
      foreignKey: 'post_id',
      sourceKey: 'post_id',
    });
    db.Post.belongsTo(db.User, {
      foreignKey: 'user_id',
      targetKey: 'user_id',
      onDelete: 'cascade'
    })
  }

export default Post;
