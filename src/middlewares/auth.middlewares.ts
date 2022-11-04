import * as jwt from "jsonwebtoken";
import express, { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv/config"
const env = process.env;
import { User } from '../../sequelize/models';
import { Auths } from '../interfaces/auth';

export interface Type {
    Type: string[];
}
export interface token {
    token: string[];
}

export const authMiddlewares = (req: Request, res: Response, next: NextFunction) => {
    const authorization:any = req?.headers.authorization;

    const Type = authorization.split(' ')[0];
    const token = authorization.split(' ')[1];
    console.log(Type, token)
    // const {Type, token} = (authorization || "").split(" ");

    try {
        if (!token || Type !== "Bearer") {
            return res.status(400).json({
                message: "You're not logged in."
            })
        }
        const tokenValue = jwt.verify(token, env.ACCESS_SECRET);
        res.locals.userId = tokenValue.userId;
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: "Invalid Token" })
    }
    next();
}