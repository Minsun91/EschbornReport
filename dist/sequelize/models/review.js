'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewFactory = exports.Review = void 0;
const sequelize_1 = require("sequelize");
class Review extends sequelize_1.Model {
}
exports.Review = Review;
function ReviewFactory(sequelize) {
    return sequelize.define('Review', {
        reviewId: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        review: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        date: {
            allowNull: false,
            type: sequelize_1.DataTypes.DATE
        }
    }, {
        modelName: 'review',
        tableName: 'review',
        timestamps: true,
        underscored: true,
    });
}
exports.ReviewFactory = ReviewFactory;
