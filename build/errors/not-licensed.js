"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_error_1 = __importDefault(require("./app-error"));
class NotLicensed extends app_error_1.default {
    constructor(message = "Not licensed") {
        super(message, 401);
    }
}
exports.default = NotLicensed;
