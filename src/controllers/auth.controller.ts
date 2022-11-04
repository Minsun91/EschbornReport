import { Request, Response, NextFunction } from "express";
import { User } from '../../sequelize/models';
import { Op } from 'sequelize';
// import { User} from "../../sequelize/models/user";
import joi from 'joi'
import { getEmailJoi, getNicknameJoi, getPasswordJoi } from "../modules/joiStorage"
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

// import * as nodemailer from 'nodemailer';
// import * as ejs from 'ejs';
// import * as path from 'path';
// let appDir = path.dirname(require.main!.filename);

//로컬 회원가입
const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, nickname, password, confirm } = req.body;
    await joi.object({
      email: getEmailJoi(),
      password: getPasswordJoi(),
      nickname: getNicknameJoi()
    }).validateAsync({ email, nickname, password });

    if (password !== confirm) {
      return res.status(400).json({
        error: 'Please check password',
      });
    }

    const dupEmail = await User.findOne({ where: { email } })

    if (dupEmail) {
      return res.status(400).json({
        error: 'Already registered. Please login',
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    
    const createUser = await User.create({
      email, nickname, password: hash
    });
    return res.status(200).json({
      msg: 'success',
    });
  } catch (error) {
    console.log(error)
    return res.status(400).json({ errorMessage: 'Unknow error' })
  }
};

//로컬 로그인
const signIn = async (req: Request, res: Response, next: NextFunction) => {
  let { email, password } = req.body;
  // let { userId } = res.locals;

  try {
    //입력된 이메일이 DB에 있는지 확인하고, 없으면 에러 메세지 전달
    const user = await User.findOne({
      where: { email },
        raw:true}    );
    console.log("로그인한 유저 정보가 나오겠지", user)
    if (!user) {
      return res.status(400).json({ errorMessage: 'Please signup' })
    }

    //입력된 비밀번호를 암호화 시켜서 기존 암호화된 비밀번호와 비교한 후, 다르면 에러 메세지 전달 
    const hashedPassword = user.password;
    const comparePassword = await bcrypt.compare(req.body.password, hashedPassword);
    if (!comparePassword) {
      return res.status(400).json({ errorMessage: 'Please information. please type correctly.' })
    }

    //이메일, 비번 다 맞으면 access 토큰 발급 
    const accessToken = jwt.sign(
      { userId: user.user_id, }, 
      process.env.ACCESS_SECRET, 
      { expiresIn: process.env.ACCESS_OPTION_EXPIRESIN });
    return res.status(200).json({accessToken: accessToken});

  } catch (error) {
    console.log(error);
    next(error);
  }
};

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
const changePassword = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { userId } = res.locals
    const userCheck = await User.findOne({
      where: {
        [Op.and]: { userId: userId, email: email },
      },
    });
    if (!userCheck) {
      res.status(400).send({
        result: 'fail',
        errorMessage: 'Cannot find email.',
      });
      return;
    }
    const hash = await bcrypt.hash(password, 12);
    await User.update(
      {
        password: hash,
      },
      {
        where: { email: email },
      }
    );
    res.status(200).json({ result: 'success' });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      errorMessage: 'Unknown Error',
    });
  }
};

export { signUp, signIn, changePassword };
