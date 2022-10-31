import { Request, Response, NextFunction } from "express";
import { Review } from '../../sequelize/models/review';
import { Post } from '../../sequelize/models/post';
import { User } from '../../sequelize/models/user';
import { Company } from '../../sequelize/models/company';
// import { Like } from '../../sequelize/models/like';
import joi from 'joi';
import { getReviewJoi } from '../modules/joiStorage';

const postReview = async (req: Request, res: Response, nest: NextFunction) => {
    try{
        const {review } = req.body;
        await joi.object({
            review: getReviewJoi(),
        }).validateAsync({review});

        const createPosts = await Review.create({
            review
        });
        res.status(200).send({msg:'success', review: review});
    } catch (error) {
        console.log(error)
        return res.status(200).json({ message: 'Review created!'})
    }
};

//내가 쓴 게시글 (회사) 리뷰들 보여주기
const getReview = async (req: Request, res:Response, next: NextFunction) => {
    try {
        const {userId} = res.locals;
        await Review.findAll({
            attributes:["postId"],
            include:
                [
                    {
                        model: Company,
                        where: {userId:userId},
                        attributes: ["companyName"],
                    },
                ], raw: true
        })
    } catch (error) {
        console.log(error)
        return res.status(200).json({ message: '' })
    }
}
export {postReview, getReview}