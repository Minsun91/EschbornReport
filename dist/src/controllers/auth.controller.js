"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.changePassword = exports.signIn = exports.signUp = void 0;
const models_1 = require("../../sequelize/models");
const sequelize_1 = require("sequelize");
// import { User} from "../../sequelize/models/user";
const joi_1 = __importDefault(require("joi"));
const joiStorage_1 = require("../modules/joiStorage");
const bcrypt = __importStar(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// import * as nodemailer from 'nodemailer';
// import * as ejs from 'ejs';
// import * as path from 'path';
// let appDir = path.dirname(require.main!.filename);
//로컬 회원가입
const signUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, nickname, password, confirm } = req.body;
        yield joi_1.default.object({
            email: (0, joiStorage_1.getEmailJoi)(),
            password: (0, joiStorage_1.getPasswordJoi)(),
            nickname: (0, joiStorage_1.getNicknameJoi)()
        }).validateAsync({ email, nickname, password });
        if (password !== confirm) {
            return res.status(400).json({
                error: 'Please check password',
            });
        }
        const dupEmail = yield models_1.User.findOne({ where: { email } });
        if (dupEmail) {
            return res.status(400).json({
                error: 'Already registered. Please login',
            });
        }
        const salt = yield bcrypt.genSalt(10);
        const hash = yield bcrypt.hash(password, salt);
        const createUser = yield models_1.User.create({
            email, nickname, password: hash
        });
        return res.status(200).json({
            msg: 'success',
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ errorMessage: 'Unknow error' });
    }
});
exports.signUp = signUp;
//로컬 로그인
const signIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { email, password } = req.body;
    // let { userId } = res.locals;
    try {
        //입력된 이메일이 DB에 있는지 확인하고, 없으면 에러 메세지 전달
        const user = yield models_1.User.findOne({
            where: { email },
            raw: true
        });
        console.log("로그인한 유저 정보가 나오겠지", user);
        if (!user) {
            return res.status(400).json({ errorMessage: 'Please signup' });
        }
        //입력된 비밀번호를 암호화 시켜서 기존 암호화된 비밀번호와 비교한 후, 다르면 에러 메세지 전달 
        const hashedPassword = user.password;
        const comparePassword = yield bcrypt.compare(req.body.password, hashedPassword);
        if (!comparePassword) {
            return res.status(400).json({ errorMessage: 'Please information. please type correctly.' });
        }
        //이메일, 비번 다 맞으면 access 토큰 발급 
        const accessToken = jsonwebtoken_1.default.sign({ userId: user.user_id, }, process.env.ACCESS_SECRET, { expiresIn: process.env.ACCESS_OPTION_EXPIRESIN });
        return res.status(200).json({ accessToken: accessToken });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.signIn = signIn;
//이메일 발송
// const sendEmail = async (req: Request, res: Response) => {
//     const { email } = req.body;
//     const existUserId = await User.findOne({ where: { email } });
//     if (!existUserId) {
//       res.status(400).send({
//         result: 'fail',
//         errormessage: '존재하지 않는 이메일입니다.',
//       });
//       return;
//     }
//     let authNum = Math.random().toString().substr(2, 6);
//     let emailTemplete;
//     ejs.renderFile(
//       appDir + '/template/authMail.ejs',
//       { authCode: authNum },
//       function (err, data) {
//         if (err) {
//           console.log(err);
//         }
//         emailTemplete = data;
//       }
//     );
//     let transporter = nodemailer.createTransport({
//       service: 'gmail',
//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.NODEMAILER_USER,
//         pass: process.env.NODEMAILER_PASS,
//       },
//     });
//     await transporter.sendMail(
//       {
//         from: 'FUNGAP',
//         to: email,
//         subject: '회원가입을 위한 인증번호를 입력해주세요.',
//         html: emailTemplete,
//       },
//       (error, info) => {
//         if (error) {
//           console.log(error);
//         }
//         res.status(202).send({ auth_code: authNum });
//         transporter.close();
//       }
//     );
//   };  
//비밀번호 변경
const changePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const { userId } = res.locals;
        const userCheck = yield models_1.User.findOne({
            where: {
                [sequelize_1.Op.and]: { userId: userId, email: email },
            },
        });
        if (!userCheck) {
            res.status(400).send({
                result: 'fail',
                errorMessage: 'Cannot find email.',
            });
            return;
        }
        const hash = yield bcrypt.hash(password, 12);
        yield models_1.User.update({
            password: hash,
        }, {
            where: { email: email },
        });
        res.status(200).json({ result: 'success' });
    }
    catch (error) {
        console.log(error);
        res.status(400).send({
            errorMessage: 'Unknown Error',
        });
    }
});
exports.changePassword = changePassword;
