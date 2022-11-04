import express, { Request, Response, NextFunction } from 'express';
import cors from "cors"
import morgan from "morgan"
// import {swaggerUi, specs} from "./swagger"
// import * as swaggerUi from 'swagger-ui-express';
import Router from "./routers"
import { sequelize } from "../sequelize/models/sequelize";
// import sequelize from  'sequelize';
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 3000;

// app.use(
//     morgan(
//       ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"  - :response-time ms'
//     )
//   );

//미들웨어
app.use(cors());
app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Request Occur! ${req.method}, ${req.url}`);
  next();
})
// sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log('데이터베이스 연결 성공');
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//라우터 설정 
app.use([Router]);
// // app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
app.use(express.static(__dirname));

//서버
app.listen(port, async () => {
  console.log(`
    ################################################
    🛡️  Server listening on port: ${port} 🛡️
    ################################################`)
  //sequelize-db 연결 테스트
  await sequelize.authenticate()
    .then(async () => {
      console.log("connection success");
    })
    .catch((e) => {
      console.log('TT : ', e);
    })
});

// export default app;