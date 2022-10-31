import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface PostAttributes {
  postId?: number;
  userId?: number;
  title: string;
  content: string;
  isLiked?: boolean;
  isBookmarked?:boolean;
  companyName: string;
}

export interface PostModel extends Model<PostAttributes>, PostAttributes {}
export class Post extends Model<PostModel, PostAttributes> {}

export type PostStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): PostModel;
};

export function PostFactory(sequelize: Sequelize): PostStatic {
  return <PostStatic>sequelize.define(
    'Post',
    {
      postId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull:false,
        },
        title: {
          type: DataTypes.STRING,
          allowNull:false
        },
        content:{ 
          type: DataTypes.STRING,
          allowNull:false
        },
        isLiked: {
          type: DataTypes.BOOLEAN,
          allowNull:true
        },
        companyName:{
          type: DataTypes.STRING,
          allowNull:false
        }
      }, {
        modelName: 'Post',
    tableName: 'Post',
    timestamps: true,
    underscored: true
      }
  );
};

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
