"use strict";
var express = require("express");
var router = express.Router();
var swaggerUi = require("swagger-ui-express");
var swaggerFile = require("../../swagger/swagger-output.json");
var authRouter = require("./auth.router");
var postRouter = require("./post.router");
var reviewRouter = require("./review.router");
router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));
router.use("/auth", authRouter);
router.use("/post", postRouter);
router.use("/review", reviewRouter);
module.exports = router;
