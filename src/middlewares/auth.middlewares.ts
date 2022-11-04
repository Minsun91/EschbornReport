import * as jwt from "jsonwebtoken";
import {RequestHandler, Request, Response, NextFunction} from "express";
import * as dotenv from "dotenv/config"
const env = process.env;

    export interface Type {
        Type: string;
    }
    export interface token {
        token: string;
    }

export const authMiddlewares: RequestHandler = (req:Request, res:Response, next: NextFunction) => {
    const authorization :any = req?.headers
    const {Type, token} = (authorization || "").split(" ");
// console.log(Type, token);

    try{
        if(!token || Type !== "Bearer") {
            return res.status(400).json({
                message: "You're not logged in."
            })
        }
        const tokenValue = jwt.verify(token, env.JWT_SECRET);
        res.locals.userId = tokenValue.userId;
    } catch(error){
        console.log(error)
        return res.status(400).json({message: "Invalid Token"})
    }
    next();
}