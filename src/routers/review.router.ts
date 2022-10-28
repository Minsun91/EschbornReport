// const express = require("express");
// const reviewrouter = express.Router();

// const reviewRouter = require("./review.router");
// const authMiddlewares = require("../middlewares/auth.middlewares");

// const ReviewController = require("../controllers/review.controller");
// const reviewcontroller = new ReviewController();

// reviewRouter.post("/", reviewcontroller.createReview)
// reviewRouter.get("/:postId", authMiddlewares, reviewcontroller.getReview)
// reviewRouter.patch("/:reviewId", authMiddlewares, reviewcontroller.updateReview)
// reviewRouter.delete("/:reviewId", authMiddlewares, reviewcontroller.deleteReview)

// module.exports = reviewRouter;

import { Router } from "express";
import { ReviewController } from "../controllers/review";
import { authMiddlewares } from "../middlewares/auth.middlewares";

// const reviewRouter: Router = Router();
// reviewRouter.post("/", new ReviewController().createPost);
// reviewRouter.get("/", new ReviewController().getAllPost);
// reviewRouter.get("/:postId", authMiddlewares, new ReviewController().getPost)
// reviewRouter.patch("/:postId", authMiddlewares, new ReviewController().updatePost)
// reviewRouter.delete("/:postId", authMiddlewares, new ReviewController().deletePost)

// export { reviewRouter };