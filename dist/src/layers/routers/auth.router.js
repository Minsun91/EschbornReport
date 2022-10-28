"use strict";
var express = require("express");
var authRouter = express.Router();
var authMiddlewares = require("../middlewares/auth.middlewares");
var AuthController = require("../controllers/auth.controller");
var authCotroller = new AuthController();
authRouter.post("/signup", authCotroller.signUp);
authRouter.post("/signin", authMiddlewares, authCotroller.signIn);
// authRouter.get("/mypage", authMiddlewares, authCotroller.getMyPage)
// authRouter.patch("/mypage", authMiddlewares, authCotroller.updateMyPage)
// authRouter.delete("/signout", authMiddlewares, authCotroller.signOut)
module.exports = authRouter;
