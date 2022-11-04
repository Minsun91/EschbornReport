"use strict";
// 'use strict';
// import { Sequelize, DataTypes, BuildOptions } from 'sequelize';
// import { Table, Column, Model, HasMany } from 'sequelize-typescript';
Object.defineProperty(exports, "__esModule", { value: true });
exports.associate = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../models/sequelize");
class User extends sequelize_1.Model {
}
User.init({
    user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER, //sequelize.integer에서 바꿔봄..
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    nickname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        // defaultValue: 'Kim',
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    }
}, {
    sequelize: sequelize_2.sequelize,
    timestamps: true,
    modelName: 'User',
    tableName: 'users',
    charset: 'utf8',
    collate: 'utf8_general_ci',
});
const associate = (db) => {
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
};
exports.associate = associate;
exports.default = User;
