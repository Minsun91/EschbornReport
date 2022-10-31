"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostFactory = exports.Post = void 0;
const sequelize_1 = require("sequelize");
class Post extends sequelize_1.Model {
}
exports.Post = Post;
function PostFactory(sequelize) {
    return sequelize.define('Post', {
        postId: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        title: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        isLiked: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: true
        },
        companyName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        }
    }, {
        modelName: 'Post',
        tableName: 'Post',
        timestamps: true,
        underscored: true
    });
}
exports.PostFactory = PostFactory;
;
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
