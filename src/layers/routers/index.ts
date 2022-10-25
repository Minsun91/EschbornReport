// const express = require("express");
// const router = express.Router();

// const swaggerUi = require("swagger-ui-express");
// const swaggerFile = require("../../swagger/swagger-output.json");

// const authRouter = require("./auth.router");
// const postRouter = require("./post.router");
// const reviewRouter = require("./review.router");

// router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// router.use("/auth", authRouter);
// router.use("/post", postRouter);
// router.use("/review", reviewRouter);

// module.exports = router;

import { authRouter } from "./auth.router";
import { postRouter } from "./post.router";
import { reviewRouter } from "./review.router";
import { swaggerUi } from "swagger-ui-express";
import { swaggerFile } from "../../swagger/swagger-output.json";

export { authRouter, postRouter, reviewRouter, swaggerUi, swaggerFile };