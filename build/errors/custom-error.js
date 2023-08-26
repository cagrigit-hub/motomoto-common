"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
const app_error_1 = __importDefault(require("./app-error"));
class CustomError extends app_error_1.default {
    constructor() {
        super("Something went wrong", 500);
    }
}
exports.CustomError = CustomError;
