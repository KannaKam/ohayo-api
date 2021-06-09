"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var status_controller_1 = __importDefault(require("../controllers/status.controller"));
var statusRoutes = express_1.Router();
statusRoutes.post('/setStatus', status_controller_1.default.prototype.setStatus);
statusRoutes.post('/checkStatus', status_controller_1.default.prototype.checkStatus);
statusRoutes.post('/setStatusManga', status_controller_1.default.prototype.setStatusManga);
statusRoutes.post('/checkStatusManga', status_controller_1.default.prototype.checkStatusManga);
exports.default = statusRoutes;
