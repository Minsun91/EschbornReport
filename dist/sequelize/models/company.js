"use strict";
// import { Model, Sequelize, DataTypes, BuildOptions } from 'sequelize';
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
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../models/sequelize");
class Company extends sequelize_1.Model {
}
Company.init({
    company_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    companyName: {
        type: Sequelize.STRING(40),
        allowNull: true,
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
}, {
    sequelize: sequelize_2.sequelize,
    timestamps: true,
    modelName: 'Company',
    tableName: 'companies',
    charset: 'utf8',
    collate: 'utf8_general_ci',
});
const associate = (db) => {
    db.Company.hasMany(db.Post, {
        foreignKey: 'company_id',
        sourceKey: 'company_id',
    });
    db.Company.hasMany(db.Like, {
        foreignKey: 'company_id',
        sourceKey: 'company_id',
        onDelete: 'cascade'
    });
    db.Company.belongsTo(db.User, {
        foreignKey: 'user_id',
        targetKey: 'user_id'
    });
};
exports.associate = associate;
exports.default = Company;
