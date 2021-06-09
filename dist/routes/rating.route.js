"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var rating_controller_1 = __importDefault(require("../controllers/rating.controller"));
var ratingRoutes = express_1.Router();
ratingRoutes.post('/setRating', rating_controller_1.default.prototype.setRating);
ratingRoutes.post('/checkRating', rating_controller_1.default.prototype.checkRating);
ratingRoutes.post('/calculateAverage', rating_controller_1.default.prototype.calculateAverageRating);
ratingRoutes.post('/setRatingManga', rating_controller_1.default.prototype.setRatingManga);
ratingRoutes.post('/checkRatingManga', rating_controller_1.default.prototype.checkRatingManga);
ratingRoutes.post('/calculateAverageManga', rating_controller_1.default.prototype.calculateAverageRatingManga);
exports.default = ratingRoutes;
