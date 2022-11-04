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
exports.getPost = exports.createPost = void 0;
const company_1 = __importDefault(require("../../sequelize/models/company"));
const post_1 = __importDefault(require("../../sequelize/models/post"));
const createPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { companyName, review, workingHour, salary, holiday, benefit } = req.body;
        const createPosts = yield post_1.default.create({
            review, workingHour, salary, holiday, benefit
        });
        res.status(200).send({ msg: 'success', companyName: companyName });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: 'Post created!' });
    }
});
exports.createPost = createPost;
//무슨 기준으로 게시글 전체 보여주지? -> 
const getPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getPosts = yield post_1.default.findAll({
            include: [
                {
                    model: company_1.default,
                    where: {},
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
exports.getPost = getPost;
