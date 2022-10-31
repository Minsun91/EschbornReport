import { Router } from "express";
import { signUp, signIn, changePassword } from "../controllers/auth.controller";
import { authMiddlewares } from "../middlewares/auth.middlewares";

const authRouter: Router = Router();
authRouter.post("/signup", signUp); 
authRouter.post("/signin", authMiddlewares, signIn);
// authRouter.patch("/maypage", new AuthController().logout);
// authRouter.get("/token", new AuthController().publishToken);
// authRouter.patch("/send-email", new AuthController().sendEmail);
// authRouter.patch("/confirm-email", new AuthController().confirmEmailCode);
// authRouter.patch("/confirm-nickname", new AuthController().confirmNickname);
// authRouter.patch("/send-password", new AuthController().sendPassword);
// authRouter.patch("/reset-password", new AuthController().resetPassword);

export { authRouter };