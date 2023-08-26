"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_error_1 = __importDefault(require("./app-error"));
class NotFound extends app_error_1.default {
    constructor(message = "Not Found") {
        super(message, 404);
    }
}
exports.default = NotFound;
