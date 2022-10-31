import { Model, Sequelize, DataTypes, BuildOptions } from 'sequelize';

interface Companyattributes {
  companyId?:number,
  postId?: number;
  userId?: number;
  address?:string;
  isLiked?: boolean;
  isBookmarked?: boolean;
  companyName: string;
}

export interface CompanyModel extends Model<Companyattributes>, Companyattributes { }
export class Company extends Model<CompanyModel, Companyattributes> { }

export type CompanyStatic = typeof Model & {
  new(values?: object, options?: BuildOptions): CompanyModel;
};

export function CompanyFactory(sequelize: Sequelize): CompanyStatic {
  return <CompanyStatic>sequelize.define(
    'Company',
    {
      companyId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true
      },
      isLiked: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      isBookmarked: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      }, companyName:{
        type:DataTypes.STRING,
        allowNull:false
      }
    }, {
    modelName: 'Company',
    tableName: 'Company',
    timestamps: true,
    underscored: true
  })
}


  // Company.associate = function(models) {
  //   Company.belongsTo(models.Post, {
  //     foreignKey:'postId',
  //     targetKey: 'postId',
  //     onDelete: 'cascade',
  //     onUpdate: 'cascade'
  //   });
  //   Company.hasMany(models.Like,{
  //     foreignKey:'companyId',
  //     targetKey:'companyId',
  //   })
  // }
  // return Company;