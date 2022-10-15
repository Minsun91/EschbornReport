const express = require("express");
const reviewrouter = express.Router();

const reviewRouter = require("./review.router");
const authMiddlewares = require("../middlewares/auth.middlewares");

const ReviewController = require("../controllers/review.controller");
const reviewcontroller = new ReviewController();

reviewRouter.post("/", reviewcontroller.createReview)
reviewRouter.get("/:postId", authMiddlewares, reviewcontroller.getReview)
reviewRouter.patch("/:reviewId", authMiddlewares, reviewcontroller.updateReview)
reviewRouter.delete("/:reviewId", authMiddlewares, reviewcontroller.deleteReview)

module.exports = reviewRouter;