const express = require("express");
const authrouter = express.Router();

const authRouter = require("./auth.router");
const authMiddlewares = require("../middlewares/auth.middlewares");

const AuthController = require("../controllers/auth.controller");
const authCotroller = new AuthController();

authrouter.post("/signup", authCotroller.signUp)
authrouter.post("/signin", authMiddlewares, authCotroller.signIn)
authrouter.get("/mypage", authMiddlewares, authCotroller.getMyPage)
authrouter.patch("/mypage", authMiddlewares, authCotroller.updateMyPage)
authrouter.delete("/signout", authMiddlewares, authCotroller.signOut)

module.exports = authRouter;