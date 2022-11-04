"use strict";
// import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';
// import {sequelize} from './index';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.associate = void 0;
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
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../models/sequelize");
class Post extends sequelize_1.Model {
}
Post.init({
    company_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    review: {
        type: Sequelize.STRING(40),
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
}, {
    sequelize: sequelize_2.sequelize,
    timestamps: true,
    modelName: 'Post',
    tableName: 'posts',
    charset: 'utf8',
    collate: 'utf8_general_ci',
});
const associate = (db) => {
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
    });
};
exports.associate = associate;
exports.default = Post;
