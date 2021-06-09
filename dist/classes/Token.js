"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
var Token = /** @class */ (function () {
    function Token() {
    }
    Token.generateToken = function (payload) {
        var myToken = jsonwebtoken_1.default.sign({
            user: payload
        }, this.secret, {
            expiresIn: this.expiration
        });
        return myToken;
    };
    Token.verifyToken = function (token) {
        return new Promise(function (resolve, reject) {
            jsonwebtoken_1.default.verify(token, Token.secret, function (err, decoded) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(decoded);
                }
            });
        });
    };
    Token.data = dotenv_1.default.config();
    Token.secret = Token.data.parsed.SECRET;
    Token.expiration = Token.data.parsed.EXPIRATION;
    return Token;
}());
exports.default = Token;
