import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import Company from "../../sequelize/models/company"
import Post from "../../sequelize/models/post"
import { getContenteJoi, getTitleJoi } from '../modules/joiStorage';

const createPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { companyName, review, workingHour, salary, holiday, benefit } = req.body;

        const createPosts = await Post.create({
            companyName, review, workingHour, salary, holiday, benefit
        });
        res.status(200).send({ msg: 'success', companyName: companyName });
    } catch (error) {
        console.log(error)
        return res.status(200).json({ message: 'Post created!' })
    }
};

//무슨 기준으로 게시글 전체 보여주지? -> 
const getPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getPosts = await Post.findAll({
            include:
                [
                    {
                        model: Company,
                        where: {},
                        attributes: ["companyName"],
                    },
                ], raw: true
        })
    } catch (error) {
        console.log(error)
        return res.status(200).json({ message: '' })
    }
}

export { createPost, getPost }
