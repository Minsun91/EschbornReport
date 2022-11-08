import { Router } from "express";
import {createPost, getPost, deletePost,searchCompany, getPostDetail, updatePost} from "../controllers/post.controller";
import { authMiddlewares } from "../middlewares/auth.middlewares";

const postRouter: Router = Router();
postRouter.post("/", authMiddlewares, createPost);
postRouter.get("/", getPost);
postRouter.get("/:postId", authMiddlewares, getPostDetail)
postRouter.post("/:companyName", searchCompany) 
postRouter.patch("/:postId", authMiddlewares, updatePost)
postRouter.delete("/:postId", authMiddlewares, deletePost)

export { postRouter };