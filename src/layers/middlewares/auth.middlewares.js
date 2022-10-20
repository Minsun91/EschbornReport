const jwt = require("jsonwebtoken");
require("dotenv").config();
const env = process.env;

module.exports = async(req, res, next) => {
    const {authorization} = req.headers;
    const [Type, token] = (authorization || "").split(" ");

    try{
        if(!token || Type !== "Bearer") {
            return res.status(400).json({
                message: "You're not logged in."
            })
        }
        const tokenValue = jwt.verify(toekn, env.ACCESS_SECRET);
        res.locals.userId = tokenValue.userId;
    } catch(err){
        console.log(err)
        return res.status(400).json({message: "Invalid Token"})
    }
    next();
}