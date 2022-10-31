"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { Request, Response, NextFunction } from 'express';
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
// import {swaggerUi, specs} from "./swagger"
// import * as swaggerUi from 'swagger-ui-express';
const routers_1 = __importDefault(require("./routers"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, morgan_1.default)(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"  - :response-time ms'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// app.use(express.urlencoded({extended:true}));
// sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log('데이터베이스 연결 성공');
//   })
//   .catch((err) => {
//     console.error(err);
//   });
app.use([routers_1.default]);
// // app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
app.use(express_1.default.static(__dirname));
app.listen(port, () => {
    console.log(`
    ################################################
    🛡️  Server listening on port: ${port} 🛡️
    ################################################`);
});
exports.default = app;
