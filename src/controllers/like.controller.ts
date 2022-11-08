import { Request, Response, NextFunction } from 'express';
import { Company, Post, Like, User } from "../../sequelize/models"
import { Companies } from "../interfaces/company";
import { Op } from 'sequelize'

//user는 post당 한 번만 좋아요 누를 수 있음
//내 userId로 검색한 post 좋아요 누를때 좋아요 등록
const giveLike = async (req: Request, res: Response, next: NextFunction) => {
    const { postId } = req.params;
    const { userId } = res.locals;
    
    try {
        let already = await Like.findOne({
            where: { userId, postId, isLiked: true },
            attributes: ['like_id', 'postId'],
            raw: true
        });
        console.log("already", already?.like_id)

        if (already) {
            await Like.destroy({ where:{like_id: already.like_id }})
            return res.status(200).json({ message: `User:${userId} unliked Post#${postId}` })
        } else {
            await Like.create({isLiked: true, userId, postId})
            return res.status(200).json({ message: `User:${userId} liked Post#${postId}` })
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}

const giveBookMark = async (req: Request, res: Response, next: NextFunction) => {
    const { postId } = req.params;
    const { userId } = res.locals;
    
    try {
        let already = await Like.findOne({
            where: { userId, postId, isBookMarked: true },
            attributes: ['like_id', 'postId'],
            raw: true
        });
        console.log("already", already?.like_id)

        if (already) {
            await Like.destroy({ where:{like_id: already.like_id }})
            return res.status(200).json({ message: `User:${userId} cancelled bookmark on Post#${postId}` })
        } else {
            await Like.create({isBookMarked: true, userId, postId})
            return res.status(200).json({ message: `User:${userId} bookmarked Post#${postId}` })
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}

const findLike = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = res.locals;
    try {
        let result = await Like.findAll({
            where: { userId }, raw: true, attributes: ['postId']
        })
        let results = result[0].postId;

        let findLikes = await Post.findAll({
            where: { post_id: results },
            attributes: ['companyName', 'post_id'],
            raw: true
        });
        console.log(findLikes);

        return res.status(200).json(findLikes)
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}

const deleteLike = async (req: Request, res: Response, next: NextFunction) => {
    const { postId } = req.params;
    try {

    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}

export { giveLike, findLike, deleteLike, giveBookMark }