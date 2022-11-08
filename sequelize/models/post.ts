import * as Sequelize from 'sequelize';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../models/sequelize';
import { dbType } from '.';

class Post extends Model {
  [x: string]: any;
  public post_id!: number; 
  public companyName!: String;
  public review!: string;
  public workingHour!: number;
  public salary!: number;
  public holiday!: number;
  public benefit!: number;
  public user_id?: number;
  public company_id?: number;
  public like_id?: number;
}
Post.init(
  {
    post_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    companyName: {
      type:Sequelize.STRING,
      allowNull: false
    },
    review: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    workingHour: {
      type: Sequelize.INTEGER,
      allowNull: false,
      // defaultValue: '아무개',
    },
    salary: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    holiday: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    benefit: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'Post',
    tableName: 'posts',
    charset: 'utf8',
    collate: 'utf8_general_ci',
  }
);

  export const associate=(db:dbType)=> {
    db.Post.belongsTo(db.Company, {
      foreignKey: 'company_id',
      targetKey: 'company_id',
    });
    db.Post.hasMany(db.Like, {
      foreignKey: 'post_id',
      sourceKey: 'post_id',
    });
    db.Post.belongsTo(db.User, {
      foreignKey: 'user_id',
      targetKey: 'user_id',
      onDelete: 'cascade'
    })
  }

export default Post;
