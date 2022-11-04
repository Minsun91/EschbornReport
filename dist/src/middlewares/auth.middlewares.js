"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddlewares = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const env = process.env;
const authMiddlewares = (req, res, next) => {
    const authorization = String(req === null || req === void 0 ? void 0 : req.headers);
    console.log("나 여깄소", authorization);
    const Type = authorization.split(' ')[0];
    const token = authorization.split(' ')[1];
    // const {Type, token} = (authorization || "").split(" ");
    try {
        if (!token || Type !== "Bearer") {
            return res.status(400).json({
                message: "You're not logged in."
            });
        }
        const tokenValue = jwt.verify(token, env.ACCESS_SECRET);
        res.locals.userId = tokenValue.userId;
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Invalid Token" });
    }
    next();
};
exports.authMiddlewares = authMiddlewares;
