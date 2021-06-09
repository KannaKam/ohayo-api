"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Auth_1 = __importDefault(require("../middlewares/Auth"));
var auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
var authRoutes = express_1.Router();
authRoutes.get("/renew", Auth_1.default, auth_controller_1.default.prototype.renewToken);
exports.default = authRoutes;
