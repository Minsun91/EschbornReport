"use strict";
// import {Model, Sequelize, DataTypes, BuildOptions} from 'sequelize'
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
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../models/sequelize");
class Like extends sequelize_1.Model {
}
Like.init({
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
}, {
    sequelize: sequelize_2.sequelize,
    timestamps: true,
    modelName: 'Like',
    tableName: 'likes',
    charset: 'utf8',
    collate: 'utf8_general_ci',
});
const associate = (db) => {
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
    });
};
exports.associate = associate;
exports.default = Like;
