"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// config/jwt.ts
const env_1 = __importDefault(require("./env"));
exports.default = {
    accessSecret: env_1.default.jwt_access_secret,
    refreshSecret: env_1.default.jwt_refresh_secret,
    accessExpiresIn: '1d',
    refreshExpiresIn: '14d', // Refresh token expiration (longer)
};
