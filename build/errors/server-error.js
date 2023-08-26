"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_error_1 = __importDefault(require("./app-error"));
class ServerError extends app_error_1.default {
    constructor(message = "Internal server error") {
        super(message, 500);
    }
}
exports.default = ServerError;
