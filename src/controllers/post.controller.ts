const PostService = require("../services/post.service");
const joi = require("joi");
const post = require("../../../sequelize/models/post");
import { Request, Response, NextFunction } from 'express';


export class PostController {
    // public signUp: RequestHandler = async (req: Request, res: Response) => {
    const createPost =async (req:Request, res: Response) => {
        try{
            const {title, content} = req.body;
  
        } catch (err: any) {
            console.log(err.message)
            return res.status(200).json({ message: result.message })
        }
    };

    const getPost = async (req: Request, res: Response, next: NextFunction)  => {
        try {
            
        } catch (err: any) {
            console.log(err.message)
            return res.status(200).json({ message: result.message })
        }
    }
}
