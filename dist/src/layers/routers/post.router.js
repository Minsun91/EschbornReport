"use strict";
var express = require("express");
var postRouter = express.Router();
var authMiddlewares = require("../middlewares/auth.middlewares");
var PostController = require("../controllers/post.controller");
var postCotroller = new PostController();
postRouter.post("/", postCotroller.createPost);
postRouter.get("/", authMiddlewares, postCotroller.getAllPost);
postRouter.get("/:postId", authMiddlewares, postCotroller.getPost);
postRouter.post("/:", authMiddlewares, postCotroller.findCompany); //회사 찾기
postRouter.patch("/:postId", authMiddlewares, postCotroller.updatePost);
postRouter.delete("/:postId", authMiddlewares, postCotroller.deletePost);
module.exports = postRouter;
