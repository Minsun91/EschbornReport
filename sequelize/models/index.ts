'use strict';
import * as Sequelize from 'sequelize';
import config  from '../config/config';
import User, { associate as associateUser } from './user'
import Post, { associate as associatePost } from './post';
import Company, { associate as associateCompany } from './company';
import Like, { associate as associateLike} from './like';
import * as dotenv from "dotenv/config"
const env = process.env || 'development';
// import { sequelize } from '../models';

import path from 'path';
import fs from 'fs';

// const fs = require('fs');
// const basename = path.basename(__filename);
// const config = require(__dirname + '/../config/config.js')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

export {User};
export {Post};
export {Like};
export {Company};
// export const Post = PostFactory(sequelize);
// export const Like = LikeFactory(sequelize);
// export const Company = CompanyFactory(sequelize);
// export const Review = ReviewFactory(sequelize);

const db = {
  User, Post, Like, Company
};
export type dbType = typeof db;
associateUser(db);
associatePost(db);
associateCompany(db);
associateLike(db);

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;