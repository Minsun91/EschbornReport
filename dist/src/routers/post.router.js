"use strict";
// const express = require("express");
// const postRouter = express.Router();
// const authMiddlewares = require("../middlewares/auth.middlewares");
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
// const PostController = require("../controllers/post.controller");
// const postCotroller = new PostController();
// postRouter.post("/", postCotroller.createPost)
// postRouter.get("/", authMiddlewares, postCotroller.getAllPost)
// postRouter.get("/:postId", authMiddlewares, postCotroller.getPost)
// postRouter.post("/:", authMiddlewares, postCotroller.findCompany) //회사 찾기
// postRouter.patch("/:postId", authMiddlewares, postCotroller.updatePost)
// postRouter.delete("/:postId", authMiddlewares, postCotroller.deletePost)
// module.exports = postRouter;
const express_1 = require("express");
const post_controller_1 = require("../controllers/post.controller");
const auth_middlewares_1 = require("../middlewares/auth.middlewares");
const postRouter = (0, express_1.Router)();
exports.postRouter = postRouter;
postRouter.post("/", auth_middlewares_1.authMiddlewares, post_controller_1.createPost);
postRouter.get("/", post_controller_1.getPost);
