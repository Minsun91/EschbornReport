// const joi = require("joi");
// const Validation = require("../modules/joiStorage")
// const AuthService = require("../services/auth.service");
import { RequestHandler, Request, Response } from "express";
import joi from 'joi'
import { CustomAggregationExpressionOperatorReturningAny } from "mongoose";
import validation from "../modules/joiStorage"
import AuthService from "../services/auth.service"

export class AuthController {
    private authService: AuthService;
    private validation: validation;

    constructor() {
        this.authService = new AuthService();
        this.validation = new validation();
    }
    // module.exports = class AuthController {
    // authService = new AuthService();
    // validation = new Validation();

    public signUp: RequestHandler = async (req: Request, res: Response) => {
        const { email, nickname, password, confirm } = req.body;
        try {
            await joi.object({
                email: this.validation.getEmailJoi(),
                nickname: this.validation.getNicknameJoi(),
                password: this.validation.getPasswordJoi(),
                confirm: this.validation.getComfirmJoi(),
            })
                .validateAsync({
                    email, nickname, password, confirm
                })

            if (password !== confirm) {
                return res.status(400).json({ message: "Password and confirm password are not matched" });
            }
            const result = await this.authService.createUser(email, nickname, password, confirm)
            return res.status(200).json({ message: result.message })
        } catch (err: any) {
            console.log(err.message)
            return res.status(200).json({ message: result.message })
        }
    };

    signIn = async (req, res, next) => {
        const { email, password } = req.body;
        try {
            await joi.object({
                email: this.validation.getEmailJoi(),
                password: this.validation.getPasswordJoi()
            }).validateAsync({ email, password });

            const result = await this.authService.signIn(email, password);
            return res.status(400).json(result)
        } catch (err: any) {
            console.log(err.message)
            return res.status(200).json({ message: result.message })
        }
    };

}