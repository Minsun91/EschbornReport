import { Router } from "express";
import { giveLike, findLike, deleteLike, giveBookMark } from "../controllers/like.controller";
import { authMiddlewares } from "../middlewares/auth.middlewares";

const likeRouter: Router = Router();
likeRouter.post("/:postId", authMiddlewares, giveLike);
likeRouter.post("/bookmark/:postId", authMiddlewares, giveBookMark);
likeRouter.get("/", authMiddlewares, findLike);
likeRouter.delete("/:postId", authMiddlewares, deleteLike)

export { likeRouter };