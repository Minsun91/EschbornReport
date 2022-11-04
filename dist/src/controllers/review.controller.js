"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReview = exports.postReview = void 0;
const review_1 = require("../../sequelize/models/review");
const company_1 = require("../../sequelize/models/company");
// import { Like } from '../../sequelize/models/like';
const joi_1 = __importDefault(require("joi"));
const joiStorage_1 = require("../modules/joiStorage");
const postReview = (req, res, nest) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { review } = req.body;
        yield joi_1.default.object({
            review: (0, joiStorage_1.getReviewJoi)(),
        }).validateAsync({ review });
        const createPosts = yield review_1.Review.create({
            review
        });
        res.status(200).send({ msg: 'success', review: review });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: 'Review created!' });
    }
});
exports.postReview = postReview;
//내가 쓴 게시글 (회사) 리뷰들 보여주기
const getReview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = res.locals;
        yield review_1.Review.findAll({
            attributes: ["postId"],
            include: [
                {
                    model: company_1.Company,
                    where: { userId: userId },
                    attributes: ["companyName"],
                },
            ], raw: true
        });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: '' });
    }
});
exports.getReview = getReview;
