"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var forum_controller_1 = __importDefault(require("../controllers/forum.controller"));
var forumRoutes = express_1.Router();
forumRoutes.post('/createThread', forum_controller_1.default.prototype.createThread);
forumRoutes.post('/deleteThread', forum_controller_1.default.prototype.deleteThread);
forumRoutes.post('/commentThread', forum_controller_1.default.prototype.commentThread);
forumRoutes.get('/findAllThreads', forum_controller_1.default.prototype.findAllThreads);
forumRoutes.put('/editThread', forum_controller_1.default.prototype.editThread);
exports.default = forumRoutes;
