"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Token_1 = __importDefault(require("../classes/Token"));
var authentication = function (req, resp, next) {
    var userToken = req.get("Authorization") || "";
    if (userToken !== "") {
        userToken = userToken.split("Bearer ")[1];
    }
    Token_1.default.verifyToken(userToken)
        .then(function (decoded) {
        req.body = decoded.user;
        next();
    })
        .catch(function (err) {
        resp.status(500).send({
            ok: false,
            msg: err,
        });
    });
};
exports.default = authentication;
