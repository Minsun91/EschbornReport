'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = exports.Like = exports.Post = exports.User = void 0;
const user_1 = __importStar(require("./user"));
exports.User = user_1.default;
const post_1 = __importStar(require("./post"));
exports.Post = post_1.default;
const company_1 = __importStar(require("./company"));
exports.Company = company_1.default;
const like_1 = __importStar(require("./like"));
exports.Like = like_1.default;
const env = process.env || 'development';
// export const Post = PostFactory(sequelize);
// export const Like = LikeFactory(sequelize);
// export const Company = CompanyFactory(sequelize);
// export const Review = ReviewFactory(sequelize);
const db = {
    User: user_1.default, Post: post_1.default, Like: like_1.default, Company: company_1.default
};
(0, user_1.associate)(db);
(0, post_1.associate)(db);
(0, company_1.associate)(db);
(0, like_1.associate)(db);
