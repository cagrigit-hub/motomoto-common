"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const envy = {
    port: process.env.PORT || 3000,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET || "secret",
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET || "secret",
    db_url: process.env.DB_URL || "mongodb://localhost:27017/user-service",
};
exports.default = envy;
