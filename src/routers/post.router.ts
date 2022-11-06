import { Router } from "express";
import {createPost, getPost, deletePost,getPostDetail, updatePost} from "../controllers/post.controller";
import { authMiddlewares } from "../middlewares/auth.middlewares";

const postRouter: Router = Router();
postRouter.post("/", authMiddlewares, createPost);
postRouter.get("/", getPost);
postRouter.get("/:postId", authMiddlewares, getPostDetail)
// postRouter.post("/", authMiddlewares, new PostCotroller().findCompany) //회사 찾기
postRouter.patch("/:postId", authMiddlewares, updatePost)
postRouter.delete("/:postId", authMiddlewares, deletePost)

export { postRouter };