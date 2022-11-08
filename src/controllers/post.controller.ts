import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import Company from "../../sequelize/models/company"
import Post from "../../sequelize/models/post"
import User from "../../sequelize/models/user"
import { Companies } from "../interfaces/company";
import { Op } from 'sequelize'
import { getContenteJoi, getTitleJoi } from '../modules/joiStorage';

const createPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { companyName, review, workingHour, salary, holiday, benefit } = req.body;
        await Post.create({
            companyName, review, workingHour, salary, holiday, benefit
        });

        //회사분위기 (팀 분위기랑 회사 전체 분위기), 업무량 추가해도 될 듯?
        function add(workingHour: number, salary: number, holiday: number, benefit: number): number {
            let avgPoint = (workingHour + salary + holiday + benefit) / 4
            return avgPoint
        }
        let avgPoint: any = add(workingHour, salary, holiday, benefit).toFixed(2);

        //회사 이름 넣으면 address로 변환해주는 방법 찾아보기
        await Company.create({
            companyName, avgPoint
        });
        res.status(200).send({ companyName: companyName, avgPoint });
    } catch (error) {
        console.log(error)
        return res.status(200).json({ message: 'Post created!' })
    }
};

const getPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getPosts = await Post.findAll({
            attributes: ['companyName', 'createdAt'],
            order: [["updatedAt","DESC"]], //최신것부터 보여줌, 오래된거 보려면 "ASC"
            raw: true
        })

        let getCompanyName: any = [];
        let getPostTime: any[] = [];
        for (let i = 0; i < getPosts.length; i++) {
            let getName: any = getPosts[i].companyName;
            let getTime: any = getPosts[i].createdAt;
            getCompanyName.push(getName);
            getPostTime.push(getTime);
        }
        let getCompanyGrade: any[] = [];
        for (let j = 0; j < getCompanyName.length; j++) {
            const grade = await Company.findAll({
                attributes: ['avgPoint'],
                where: { companyName: getCompanyName[j] },
                raw: true
            })
            getCompanyGrade.push(grade[0].avgPoint)
        }

        let getPost:any[] = [];
        for (let k=0; k<getCompanyGrade.length; k ++) {
            let result = getCompanyName[k]+", "+ getCompanyGrade[k]+", "+getPostTime[k];
            let results = result.split(',')
            getPost.push(results)
        } 
        // console.log(getPost); 
        return res.status(200).json(getPost)

    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}

const getPostDetail = async (req: any, res: any, next: NextFunction) => {
    const { postId } = req.params;

    try {
        const details = await Post.findOne({
            where: { post_id: postId },
            attributes: ['companyName', 'review', 'workingHour', 'salary', 'holiday', 'benefit'],
            raw: true
        });
        return res.status(200).json(details)
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}

const searchCompany = async (req: Request, res: Response, next: NextFunction) => {
    const { companyName } = req.body;

    try {
        const findCompany = await Company.findAll({
            attributes: ['avgPoint', 'companyName'],
            where: {
                companyName: {
                    [Op.substring]: `${companyName}`,
                }
            },
            raw: true
        })

        let findCompanyPosts: any[] = [];
        for (let i = 0; i < findCompany.length; i++) {
            const findCompanyPost: any = await Post.findAll({
                attributes: ['review', 'workingHour', 'salary', 'holiday', 'benefit'],
                where: { companyName: findCompany[i].companyName },
                raw: true
            });
            findCompanyPosts.push(findCompanyPost);
        }
        return res.status(200).json([...findCompanyPosts[0]])
    } catch (error) {
        console.log(error);
        return res.status(200).json(error);
    }
}
const updatePost = async (req: Request, res: Response, next: NextFunction) => {
    const { postId } = req.params;

    const { review, workingHour, salary, holiday, benefit } = req.body;
    try {
        await Post.update(
            { review, workingHour, salary, holiday, benefit },
            { where: { post_id: postId } });
        return res.status(200).json({ message: 'Post has been updated.' })
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}

const deletePost = async (req: any, res: any, next: NextFunction) => {
    const { postId } = req.params;

    try {
        await Post.destroy({ where: { post_id: postId } })
        return res.status(200).json({ message: "Selected Post has been removed." })
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}

export { createPost, getPost, searchCompany, updatePost, getPostDetail, deletePost }
