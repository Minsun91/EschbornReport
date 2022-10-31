// export const sequelizeConnection = new Sequelize ({
//   development: process.env.NODE_ENV === "development",
//   production: process.env.NODE_ENV === "production",
//   test: process.env.NODE_ENV === "test",

//   jwt_secret: String(process.env.JWT_SECRET),

//   db_username: String(process.env.DB_DEV_USERNAME),
//   db_password: String(process.env.DB_DEV_PASSWORD),
//   db_database: String(process.env.DB_DEV_DATABASE),
//   db_host: String(process.env.DB_DEV_HOST),
//   db_dialect: String(process.env.DB_DEV_DIALECT)
// });

// export default sequelizeConnection
//-----------------------------------------------------------------

// require("dotenv").config({
//   path: "config/.env.seque",
// });

// export const config = {
//   development: {
//   username: process.env.DB_DEV_USERNAME,
//   password: process.env.DB_DEV_PASSWORD,
//   database: process.env.DB_DEV_DATABASE,
//   host: process.env.DB_DEV_HOST,
//   dialect: 'mysql'
// },

// production: {
//   username: process.env.DB_PROD_USERNAME,
//   password: process.env.DB_PROD_PASSWORD,
//   database: process.env.DB_PROD_DATABASE,
//   host: process.env.DB_PROD_HOST,
//   dialect: process.env.DB_PROD_DIALECT,
// },

// test: {
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE_TEST,
//   host: process.env.DB_HOST,
//   dialect: 'mysql'
// }
// }

//-----------------------------------------------------------------
import dotenv from 'dotenv';
dotenv.config({path:'../.env'});

type Config = {
  username: string;
  password: string;
  database: string;
  host:string;
  [key: string]: string | boolean | object;
};

interface IConfigGroup {
  development: Config;
  test: Config;
  production: Config;
}

const config: IConfigGroup = {
  development: {
    username: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    host: process.env.DB_END_POINT!,
    dialect: 'mysql'
  },
  test: {
    username: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME! + '_test',
    host: process.env.DB_END_POINT!,
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    host: process.env.DB_END_POINT!,
    dialect: 'mysql'
  },
};

export default config;