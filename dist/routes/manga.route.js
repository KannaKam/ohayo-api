"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var manga_controller_1 = __importDefault(require("../controllers/manga.controller"));
var mangaRoutes = express_1.Router();
//mangaRoutes.get('/insertmanga', mangaController.prototype.insertmanga);
mangaRoutes.get('/findAllManga', manga_controller_1.default.prototype.findAllManga);
mangaRoutes.post('/sortManga', manga_controller_1.default.prototype.sortManga);
exports.default = mangaRoutes;
