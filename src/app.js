const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

require("dotenv/config");

const indexRouter = require("./layers/routers");

const app = express();
const port = 3000;

app.use(
    morgan(
      ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"  - :response-time ms'
    )
  );

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api", indexRouter);
app.use(express.static(__dirname));

app.listen(port, ()=> {
    console.log(port, "켜짐")
});
