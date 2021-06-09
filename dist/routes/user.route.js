"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = __importDefault(require("../controllers/user.controller"));
var userRoutes = express_1.Router();
userRoutes.post('/signUp', user_controller_1.default.prototype.signUp);
userRoutes.post('/signIn', user_controller_1.default.prototype.signIn);
userRoutes.post('/findUserById', user_controller_1.default.prototype.findUserById);
userRoutes.post('/updateAnimeList', user_controller_1.default.prototype.updateAnimeList);
userRoutes.post('/updateMangaList', user_controller_1.default.prototype.updateMangaList);
userRoutes.post('/findAnimeList', user_controller_1.default.prototype.findAnimeList);
userRoutes.post('/findMangaList', user_controller_1.default.prototype.findMangaList);
userRoutes.post('/editUsername', user_controller_1.default.prototype.editUsername);
exports.default = userRoutes;
