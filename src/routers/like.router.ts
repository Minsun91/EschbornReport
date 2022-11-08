import { Router } from "express";
import { giveLike, findLike,deleteLike } from "../controllers/like.controller";
import { authMiddlewares } from "../middlewares/auth.middlewares";

const likeRouter: Router = Router();
likeRouter.post("/:postId", authMiddlewares, giveLike);
likeRouter.get("/", authMiddlewares, findLike);
likeRouter.delete("/:postId", authMiddlewares, deleteLike)

export { likeRouter };