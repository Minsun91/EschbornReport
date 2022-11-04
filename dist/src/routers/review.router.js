"use strict";
// const express = require("express");
// const reviewrouter = express.Router();
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRouter = void 0;
// const reviewRouter = require("./review.router");
// const authMiddlewares = require("../middlewares/auth.middlewares");
// const ReviewController = require("../controllers/review.controller");
// const reviewcontroller = new ReviewController();
// reviewRouter.post("/", reviewcontroller.createReview)
// reviewRouter.get("/:postId", authMiddlewares, reviewcontroller.getReview)
// reviewRouter.patch("/:reviewId", authMiddlewares, reviewcontroller.updateReview)
// reviewRouter.delete("/:reviewId", authMiddlewares, reviewcontroller.deleteReview)
// module.exports = reviewRouter;
const express_1 = require("express");
const review_controller_1 = require("../controllers/review.controller");
const auth_middlewares_1 = require("../middlewares/auth.middlewares");
const reviewRouter = (0, express_1.Router)();
exports.reviewRouter = reviewRouter;
reviewRouter.post("/:postId", auth_middlewares_1.authMiddlewares, review_controller_1.postReview);
reviewRouter.get("/", auth_middlewares_1.authMiddlewares, review_controller_1.getReview);
