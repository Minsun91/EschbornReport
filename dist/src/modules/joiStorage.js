"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReviewJoi = exports.getContenteJoi = exports.getTitleJoi = exports.getConfirmJoi = exports.getPasswordJoi = exports.getNicknameJoi = exports.getEmailJoi = void 0;
const joi_1 = __importDefault(require("joi"));
// module.exports = class Validation{
const getEmailJoi = () => {
    const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    return joi_1.default.string().max(30).required().regex(emailRegExp).messages({
        "string.base": "Email must be a string.",
        "any.required": "Please enter Email.",
        "string.pattern.base": "Please check the pattern of Email.",
        "string.max": "Email must not exceed 30 letters.",
    });
};
exports.getEmailJoi = getEmailJoi;
const getNicknameJoi = () => {
    return joi_1.default.string().max(8).required().messages({
        "string.base": "Nickname must be a string.",
        "any.required": "Please enter Nickname.",
        "string.max": "Maximum letters of Nickname is 8 letters.",
    });
};
exports.getNicknameJoi = getNicknameJoi;
const getPasswordJoi = () => {
    const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    return joi_1.default.string().max(16).min(8).required().regex(passwordRegExp).messages({
        "string.base": "Password must be a string.",
        "any.required": "Please enter Password.",
        "string.pattern.base": "Please check the pattern of Password.",
        "string.min": "Password must be more than 8 letters.",
        "string.max": "Password must not exceed 16 letters",
    });
};
exports.getPasswordJoi = getPasswordJoi;
const getConfirmJoi = () => {
    const confirmRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    return joi_1.default.string().max(16).min(8).required().regex(confirmRegExp).messages({
        "string.base": "confirmpassword must be a string.",
        "any.required": "Please enter confirmpassword.",
        "string.pattern.base": "Please check the pattern of confirmpassword.",
        "string.min": "confirmpassword must be more than 8 letters.",
        "string.max": "confirmpassword must not exceed 16 letters",
    });
};
exports.getConfirmJoi = getConfirmJoi;
const getTitleJoi = () => {
    return joi_1.default.string().min(1).required().messages({
        "string.base": "Title must be a string.",
        "any.required": "Please enter title.",
        "string.min": "title must be more than 1 letters.",
    });
};
exports.getTitleJoi = getTitleJoi;
const getContenteJoi = () => {
    return joi_1.default.string().min(1).required().messages({
        "string.base": "Content must be a string.",
        "any.required": "Please enter content.",
        "string.min": "content must be more than 1 letters.",
    });
};
exports.getContenteJoi = getContenteJoi;
const getReviewJoi = () => {
    return joi_1.default.string().min(1).required().messages({
        "string.base": "Review must be a string.",
        "any.required": "Please enter review.",
        "string.min": "Review must be more than 1 letters.",
    });
};
exports.getReviewJoi = getReviewJoi;
