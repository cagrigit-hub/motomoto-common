"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRefreshToken = exports.validateAccessToken = void 0;
// utils/authUtils.ts
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_1 = __importDefault(require("./jwt"));
const validateAccessToken = (token) => {
    try {
        // console log get rid of Bearer
        jsonwebtoken_1.default.verify(token, jwt_1.default.accessSecret);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.validateAccessToken = validateAccessToken;
const validateRefreshToken = (token) => {
    try {
        jsonwebtoken_1.default.verify(token, jwt_1.default.refreshSecret);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.validateRefreshToken = validateRefreshToken;
