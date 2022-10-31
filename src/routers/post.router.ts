// const express = require("express");
// const postRouter = express.Router();
// const authMiddlewares = require("../middlewares/auth.middlewares");

// const PostController = require("../controllers/post.controller");
// const postCotroller = new PostController();

// postRouter.post("/", postCotroller.createPost)
// postRouter.get("/", authMiddlewares, postCotroller.getAllPost)
// postRouter.get("/:postId", authMiddlewares, postCotroller.getPost)
// postRouter.post("/:", authMiddlewares, postCotroller.findCompany) //회사 찾기
// postRouter.patch("/:postId", authMiddlewares, postCotroller.updatePost)
// postRouter.delete("/:postId", authMiddlewares, postCotroller.deletePost)

// module.exports = postRouter;

import { Router } from "express";
import {createPost, getPost} from "../controllers/post.controller";
import { authMiddlewares } from "../middlewares/auth.middlewares";

const postRouter: Router = Router();
postRouter.post("/", authMiddlewares, createPost);
postRouter.get("/", getPost);
// postRouter.get("/:postId", authMiddlewares, new PostController().getPost)
// postRouter.post("/:", authMiddlewares, new PostCotroller().findCompany) //회사 찾기
// postRouter.patch("/:postId", authMiddlewares, new PostController().updatePost)
// postRouter.delete("/:postId", authMiddlewares, new PostController().deletePost)

export { postRouter };