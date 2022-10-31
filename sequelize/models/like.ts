import {Model, Sequelize, DataTypes, BuildOptions} from 'sequelize'

interface LikeAttributes {
  likeId: number;
  postId?:number;
  userId?:number;
  isLiked?: boolean;
  isBookMarked?:boolean;
}

export interface LikeModel extends Model<LikeAttributes>,LikeAttributes{}
export class Like extends Model<LikeModel, LikeAttributes> { }

export type LikeStatic = typeof Model & {
  new(values?: object, options?: BuildOptions): LikeModel;
};

export function LikeFactory(sequelize:Sequelize): LikeStatic{
  return <LikeStatic>sequelize.define('Like',{
    likeId: {type: DataTypes.INTEGER, primaryKey: true, allowNull: true},
    isBookMarked: {type: DataTypes.BOOLEAN, allowNull: false},
    isLiked: {type: DataTypes.BOOLEAN, allowNull: false}

  }, {
    modelName: 'Like',
    tableName: 'Like',
    timestamps: true,
    underscored: true
  });
}
  // Like.associate = function(models) {
  //   Like.belongsTo(models.Post,{
  //     foreignKey:'postId',
  //     targetKey: 'postId'
  //   });
  //     Like.belongsTo(models.Review,{
  //       foreignKey:'reviewId',
  //       targetKey: 'reviewId'
  //     });
  //     Like.belongsTo(models.Company,{
  //       foreignKey:'companyId',
  //       targetKey: 'companyId'
  //     });
  // }
  // return Like;
