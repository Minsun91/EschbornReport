const express = require("express");
const promiserouter = express.Router();

const postRouter = require("./post.router");
const authMiddlewares = require("../middlewares/auth.middlewares");

const PostController = require("../controllers/post.controller");
const postCotroller = new PostController();

postRouter.post("/", postCotroller.createPost)
postRouter.get("/", authMiddlewares, postCotroller.getAllPost)
postRouter.get("/:postId", authMiddlewares, postCotroller.getPost)
postRouter.post("/:", authMiddlewares, postCotroller.findCompany) //회사 찾기
postRouter.patch("/:postId", authMiddlewares, postCotroller.updatePost)
postRouter.delete("/:postId", authMiddlewares, postCotroller.deletePost)

module.exports = postRouter;