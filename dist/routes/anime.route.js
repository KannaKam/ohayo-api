"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var anime_controller_1 = __importDefault(require("../controllers/anime.controller"));
var animeRoutes = express_1.Router();
//animeRoutes.get('/insertAnimes', animeController.prototype.inserAnime);
animeRoutes.get('/findAllAnimes', anime_controller_1.default.prototype.findAllAnimes);
animeRoutes.post('/sortAnimes', anime_controller_1.default.prototype.sortAnimes);
exports.default = animeRoutes;
