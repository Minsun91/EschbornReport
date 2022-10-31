'use strict';
import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

interface ReviewAttributes {
  reviewId?: number;
  userId?: number;
  postId?: number;
  review: string;
  date?: Date;
}

export interface ReviewModel extends Model<ReviewAttributes>, ReviewAttributes { }
export class Review extends Model<ReviewModel, ReviewAttributes> { }

export type ReviewStatic = typeof Model & {
  new(values?: object, options?: BuildOptions): ReviewModel;
};

export function ReviewFactory(sequelize: Sequelize): ReviewStatic {
  return <ReviewStatic>sequelize.define(
    'Review',
    {
      reviewId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
      },
      review: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }, {
    modelName: 'review',
    tableName: 'review',
    timestamps: true,
    underscored: true,
  }
  )
}

  // Review.associate = function (models) {
  //   Review.belongsTo(models.Post, {
  //     foreignKey: "postId",
  //     targetKey: "postId",
  //     onUpdate: "cascade",
  //     onDelete: "cascade",
  //   });
  //   Review.belongsTo(models.User, {
  //     foreignKey: "userId",
  //     targetKey: "userId",
  //     onUpdate: "cascade",
  //     onDelete: "cascade",
  //   });
  //   Review.hasMany(models.Like, {
  //     foreignKey: "reviewId",
  //     targetKey: "reviewId",
  //     onUpdate: "cascade",
  //     onDelete: "cascade",
  //   });
  // };
