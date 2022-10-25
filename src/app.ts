import express from "express"
import cors from "cors"
import morgan from "morgan"
// import {swaggerUi, specs} from "./swagger"
import indexRouter from "./layers/routers"

import * as dotenv from "dotenv/config"

const app = express();
// const app = express.Express = express();
const port = 3000;

// app.use(
//     morgan(
//       ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"  - :response-time ms'
//     )
//   );

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// app.use("/api", indexRouter);
// // app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
// app.use(express.static(__dirname));

app.listen(port, ()=> {
    console.log(`
    ################################################
    🛡️  Server listening on port: ${port} 🛡️
    ################################################`)
});
