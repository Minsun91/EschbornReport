const express = require("express");
const router = express.Router();

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../../swagger/swagger-output.json");

const authRouter = require("./auth.router");
const postRouter = require("./post.router");
const reviewRouter = require("./review.router");

router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));

router.use("/auth", authRouter);
router.use("/post", postRouter);
router.use("/review", reviewRouter);

module.exports = router;