const joi = require("joi");
const Validation = require("../modules/joiStorage")

const AuthService = require("../services/auth.service");

module.exports = class AuthController {
    authService = new AuthService();
    validation = new Validation();
    
    signUp = async(req, res, next) => {
        const {email, nickname, password, confirm} = req.body;
        try{
            await joi.object({
                email: this.validation.getEmailJoi(),
                nickname: this.validation.getNicknameJoi(),
                password: this.validation.getPasswordJoi(),
                confirm: this.validation.getComfirmJoi(),
            })
            .validateAsync({
                email, nickname, password, confirm
            })

            if( password !== confirm) {
                return res.status(400).json({message: "Password and confirm password are not matched"});
            }
            const result = await this.authService.createUser(email, nickname, password, confirm)
            return res.status(200).json({message: result.message})
        } catch(err){
            console.log(err);
            return res.json({ message: err.message });
        }
    }
}