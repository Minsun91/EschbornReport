"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
// const app = express.Express = express();
var port = 3000;
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
app.listen(port, function () {
    console.log("\n    ################################################\n    \uD83D\uDEE1\uFE0F  Server listening on port: ".concat(port, "\n    ################################################"));
});
