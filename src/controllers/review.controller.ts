import { RequestHandler, Request, Response } from "express";
import { Review } from '../../sequelize/models/review';

export class ReviewController {
    // public signUp: RequestHandler = async (req: Request, res: Response) => {
    public signUp(signup: SignUp){
            if (signup.password !== signup.confirm) {
                return res.status(400).json({ message: "Password and confirm password are not matched" });
            }
            const result = await this.authService.createUser(email, nickname, password, confirm)
            return res.status(200).json({ message: result.message })
        } catch (err: any) {
            console.log(err.message)
            return res.status(200).json({ message: result.message })
        }
    // };

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