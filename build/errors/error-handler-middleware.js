"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
const app_error_1 = __importDefault(require("./app-error"));
const errorHandlerMiddleware = (error, req, res, next) => {
    if (error instanceof app_error_1.default) {
        // Custom app-specific errors
        res.status(error.statusCode).json({ error: error.message });
    }
    else {
        // Generic error handling
        console.error('Unhandled Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.errorHandlerMiddleware = errorHandlerMiddleware;
