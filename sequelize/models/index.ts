'use strict';
import * as Sequelize from 'sequelize';
import config  from '../config/config';
import { UserFactory } from './user'
import { PostFactory } from './post';
import { CompanyFactory } from './company';
import { ReviewFactory } from './review';
import { LikeFactory } from './like';
import * as dotenv from "dotenv/config"
const env = process.env;

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

export const sequelize = new Sequelize.Sequelize(
  {
    database: config.development.database,
    username: config.development.username,
    password: config.development.password,
    host: config.development.host,
    dialect: 'mysql',
    // database:config.db_database,
    // username: config.db_username,
    // password: config.db_password,
    // host: config.db_host,
    // dialect: config.db_dialect
  }
);

export const User = UserFactory(sequelize);
export const Post = PostFactory(sequelize);
export const Like = LikeFactory(sequelize);
export const Company = CompanyFactory(sequelize);
export const Review = ReviewFactory(sequelize);

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

//테이블간 관계 설정 ()
User.hasMany(Post, {
  foreignKey:"userId",
  sourceKey:"userId"
});
User.hasMany(Review,{
  foreignKey:"userId",
  sourceKey:"userId"
});
User.hasMany(Company, {
  foreignKey:"userId",
  sourceKey:"userId"
});
Post.hasMany(Review, {
  foreignKey:"postId",
  sourceKey:"postId"
});
Post.hasMany(Like, {
  foreignKey:"postId",
  sourceKey:"postId"
});

Post.belongsTo(User, {
  foreignKey:"userId",
  targetKey:"userId",
  onDelete:"cascade"
});
Review.belongsTo(User,{
  foreignKey:"userId",
  targetKey:"userId",
  onDelete:"cascade"
});
Company.belongsTo(User, {
  foreignKey:"userId",
  targetKey:"userId",
  onDelete:"cascade"
});
Review.belongsTo(Post, {
  foreignKey:"postId",
  targetKey:"postId",
  onDelete:"cascade"
});
Like.belongsTo(Post, {
  foreignKey:"postId",
  targetKey:"postId",
  onDelete:"cascade"
});
// Company.hasMany(Bookmark, {
//   foreignKey:"companyId",
//   sourceKey:"companyId"
// });
Company.hasMany(Like, {
  foreignKey:"companyId",
  sourceKey:"companyId"
});
Company.hasMany(Post, {
  foreignKey:"companyId",
  sourceKey:"companyId"
});
Company.hasMany(Review, {
  foreignKey:"companyId",
  sourceKey:"companyId"
});

// Company.belongsTo(Bookmark, {
//   foreignKey:"companyId",
//   sourceKey:"companyId"
// });
Like.belongsTo(Company, {
  foreignKey:"companyId",
  targetKey:"companyId",
  onDelete:"cascade"
});
Post.belongsTo(Company, {
  foreignKey:"companyId",
  targetKey:"companyId",
  onDelete:"cascade"
});
Review.belongsTo(Company, {
  foreignKey:"companyId",
  targetKey:"companyId",
  onDelete:"cascade"
});
// Post.hasMany(PostImage, {
//   foreignKey:"postId",
//   targetKey:"postId"
//, onDelete:"cascade" });

Review.hasMany(Like, {
  foreignKey:"rewiewId",
  sourceKey:"reviewId"
});
Like.belongsTo(Review, {
  foreignKey:"rewiewId",
  targetKey:"reviewId"
});