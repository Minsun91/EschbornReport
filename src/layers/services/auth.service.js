const jwt = require("jsonwebtoken");
require("dotenv/config")

const AuthRepository = require("../repositories/auth.repository");

module.exports = class AuthService{
    authRepository = new AuthRepository();

    createUser = async (email, nickname, password, confirm) => {
try{
    const createusers = await this.authRepository.createUserData(email, nickname, password, confirm);
    return createusers;
}catch(err){
    console.log(err) 
    return {message:err.message}
}
    };
}