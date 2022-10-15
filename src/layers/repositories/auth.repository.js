// const User = require("../sequelize/models")

module.exports = class AuthRepository{
    createUser = async(email, nickname, password, confirm) => {
        try{
            await this.createUser.create({
                email,nickname, password, confirm})
        }catch(err) {
            console.log(err)
            return {message:err.message}
        }
    }

}