'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Model = require('sequelize').Model;
module.exports = function (sequelize, DataTypes) {
    var Post = /** @class */ (function (_super) {
        __extends(Post, _super);
        function Post() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        Post.associate = function (models) {
            // define association here
        };
        return Post;
    }(Model));
    Post.init({
        postId: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize: sequelize,
        modelName: 'Post',
        tableName: 'Post',
        timestamps: true,
        underscored: true
    });
    Promise.associate = function (models) {
        Promise.belongsTo(models.User, {
            foreignKey: "userId",
            targetKey: "userId",
            onUpdate: "cascade",
            onDelete: "cascade",
            //constraints: false,
        });
        Promise.hasMany(models.Review, {
            foreignKey: "postId",
            sourceKey: "postId",
            onUpdate: "cascade",
            onDelete: "cascade",
        });
        Promise.hasMany(models.Like, {
            foreignKey: "postId",
            sourceKey: "postId",
            onUpdate: "cascade",
            onDelete: "cascade",
        });
    };
    return Post;
};
