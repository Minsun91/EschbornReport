  import * as Sequelize from 'sequelize';
  import { Model, DataTypes } from 'sequelize';
  import { sequelize } from '../models/sequelize';
  import { dbType } from '.';
  
  class Like extends Model {
    static findByIdAndDelete(arg0: { like_id: any; }) {
        throw new Error('Method not implemented.');
    }
    public like_id!: number; 
    public isLiked!: boolean;
    public isBookMarked!: boolean;
    public postId?: number; 
    public userId?: number;
    public company_id?: number;
  }

  Like.init(
    {
      like_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      isLiked: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      isBookMarked: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      postId:{
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      userId:{
        type: Sequelize.INTEGER,
        allowNull: true,
      }
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'Like',
      tableName: 'likes',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );
  
    export const associate=(db:dbType)=> {
      db.Like.belongsTo(db.Post, {
        foreignKey: 'post_id',
        targetKey: 'post_id',
      });
      db.Like.belongsTo(db.Company, {
        foreignKey: 'company_id',
        targetKey: 'company_id',
      });
      db.Like.belongsTo(db.User, {
        foreignKey: 'user_id',
        targetKey: 'user_id',
      })
    }
  
  export default Like;