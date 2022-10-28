import * as jwtLib from "jsonwebtoken";
import {RequestHandler, Request, Response, NextFunction} from "express";
import * as dotenv from "dotenv/config"

    export interface Type {
        type: string;
    }
    export interface token {
        type: string;
    }

export const authMiddlewares: RequestHandler = (req:Request, res:Response, next: NextFunction) => {
    const authorization = req?.headers?;
    const {Type, token} = (authorization || "").split(" ");

    try{
        if(!token || Type !== "Bearer") {
            return res.status(400).json({
                message: "You're not logged in."
            })
        }
        const tokenValue = jwt.verify(token, env.ACCESS_SECRET);
        res.locals.userId = tokenValue.userId;
    } catch(err:any){
        console.log(err)
        return res.status(400).json({message: "Invalid Token"})
    }
    next();
}