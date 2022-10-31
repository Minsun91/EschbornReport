import express, { Application, Request, Response, NextFunction } from 'express';
// import { Request, Response, NextFunction } from 'express';
import cors from "cors"
import morgan from "morgan"
// import {swaggerUi, specs} from "./swagger"
// import * as swaggerUi from 'swagger-ui-express';
import Router from "./routers"

import * as dotenv from "dotenv/config";
const app: Application = express();
const port = 3000;

app.use(
    morgan(
      ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"  - :response-time ms'
    )
  );

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log('데이터베이스 연결 성공');
//   })
//   .catch((err) => {
//     console.error(err);
//   });

app.use([Router]);
// // app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
app.use(express.static(__dirname));

app.listen(port, ()=> {
    console.log(`
    ################################################
    🛡️  Server listening on port: ${port} 🛡️
    ################################################`)
});

export default app;