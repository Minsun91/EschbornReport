import joi from "joi"

// module.exports = class Validation{
    const getEmailJoi = () => {
        const emailRegExp = 
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        return joi.string().max(30).required().regex(emailRegExp).messages({
          "string.base": "Email must be a string.",
          "any.required": "Please enter Email.",
          "string.pattern.base": "Please check the pattern of Email.",
          "string.max": "Email must not exceed 30 letters.",
        });
      };
    const getNicknameJoi = () => {
        return joi.string().max(8).required().messages({
          "string.base": "Nickname must be a string.",
          "any.required": "Please enter Nickname.",
          "string.max": "Maximum letters of Nickname is 8 letters.",
        });
      };
    const getPasswordJoi = ()=> {
        const passwordRegExp = 
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
        return joi.string().max(16).min(8).required().regex(passwordRegExp).messages({
            "string.base": "Password must be a string.",
            "any.required": "Please enter Password.",
            "string.pattern.base": "Please check the pattern of Password.",
            "string.min": "Password must be more than 8 letters.",
            "string.max": "Password must not exceed 16 letters",
          });
      }
    const getConfirmJoi = ()=> {
        const confirmRegExp = 
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
        return joi.string().max(16).min(8).required().regex(confirmRegExp).messages({
            "string.base": "confirmpassword must be a string.",
            "any.required": "Please enter confirmpassword.",
            "string.pattern.base": "Please check the pattern of confirmpassword.",
            "string.min": "confirmpassword must be more than 8 letters.",
            "string.max": "confirmpassword must not exceed 16 letters",
          });
      };

      const getTitleJoi = ()=> {
        return joi.string().min(1).required().messages({
            "string.base": "Title must be a string.",
            "any.required": "Please enter title.",
            "string.min": "title must be more than 1 letters.",
          });
      };

      const getContenteJoi = ()=> {
        return joi.string().min(1).required().messages({
            "string.base": "Content must be a string.",
            "any.required": "Please enter content.",
            "string.min": "content must be more than 1 letters.",
          });
      };
      const getReviewJoi = ()=> {
        return joi.string().min(1).required().messages({
            "string.base": "Review must be a string.",
            "any.required": "Please enter review.",
            "string.min": "Review must be more than 1 letters.",
          });
      };


export {getEmailJoi, getNicknameJoi, getPasswordJoi, getConfirmJoi , getTitleJoi, getContenteJoi, getReviewJoi}

