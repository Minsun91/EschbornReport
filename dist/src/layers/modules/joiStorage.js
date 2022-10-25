"use strict";
var joi = require("joi");
module.exports = /** @class */ (function () {
    function Validation() {
        this.getEmailJoi = function () {
            var emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
            return joi.string().max(30).required().regex(emailRegExp).messages({
                "string.base": "Email must be a string.",
                "any.required": "Please enter Email.",
                "string.pattern.base": "Please check the pattern of Email.",
                "string.max": "Email must not exceed 30 letters.",
            });
        };
        this.getNicknameJoi = function () {
            return joi.string().max(8).required().messages({
                "string.base": "Nickname must be a string.",
                "any.required": "Please enter Nickname.",
                "string.max": "Maximum letters of Nickname is 8 letters.",
            });
        };
        this.getPasswordJoi = function () {
            var passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
            return joi.string().max(16).min(8).required().regex(passwordRegExp).messages({
                "string.base": "Password must be a string.",
                "any.required": "Please enter Password.",
                "string.pattern.base": "Please check the pattern of Password.",
                "string.min": "Password must be more than 8 letters.",
                "string.max": "Password must not exceed 16 letters",
            });
        };
        this.getConfirmJoi = function () {
            var confirmRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
            return joi.string().max(16).min(8).required().regex(confirmRegExp).messages({
                "string.base": "confirmpassword must be a string.",
                "any.required": "Please enter confirmpassword.",
                "string.pattern.base": "Please check the pattern of confirmpassword.",
                "string.min": "confirmpassword must be more than 8 letters.",
                "string.max": "confirmpassword must not exceed 16 letters",
            });
        };
    }
    return Validation;
}());
