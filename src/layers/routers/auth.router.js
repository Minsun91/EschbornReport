const express = require("express");
const authrouter = express.Router();

const authRouter = require("./auth.router");
const authMiddlewares = require("../middlewares/auth.middlewares");

const AuthController = require("../controllers/auth.controller");
const authCotroller = new AuthController();

authRouter.post("/signup", authCotroller.signUp)
authRouter.post("/signin", authMiddlewares, authCotroller.signIn)
authRouter.get("/mypage", authMiddlewares, authCotroller.getMyPage)
authRouter.patch("/mypage", authMiddlewares, authCotroller.updateMyPage)
authRouter.delete("/signout", authMiddlewares, authCotroller.signOut)

module.exports = authRouter;