"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_utils_1 = require("./auth-utils");
const currentUser = (req, res, next) => {
    const auth = req.header('Authorization');
    const token = auth === null || auth === void 0 ? void 0 : auth.split(' ')[1];
    if (!token || !(0, auth_utils_1.validateAccessToken)(token)) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    // Verify the token's expiration date
    const decoded = jsonwebtoken_1.default.decode(token);
    const tokenExpiration = (decoded === null || decoded === void 0 ? void 0 : decoded.exp) || 0;
    const currentTime = Math.floor(Date.now() / 1000);
    // If the token is about to expire, send a response indicating the need for a refresh
    if (tokenExpiration - currentTime < 60) {
        return res.status(401).json({ error: 'Token about to expire', refresh_token_required: true });
    }
    // set req.user 
    req.user = decoded;
    // Token is valid, continue to the next middleware/route handler
    next();
};
exports.currentUser = currentUser;
