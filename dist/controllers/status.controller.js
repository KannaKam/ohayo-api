"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var statusAnime_model_1 = require("../models/statusAnime.model");
var statusManga_model_1 = require("../models/statusManga.model");
var StatusController = /** @class */ (function () {
    function StatusController() {
    }
    StatusController.prototype.setStatus = function (req, resp) {
        statusAnime_model_1.StatusAnime.update({ animeId: req.body.animeId, userId: req.body.userId }, req.body, { upsert: true, setDefaultsOnInsert: true }).then(function (Anime) {
            if (!statusAnime_model_1.StatusAnime) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                });
            }
            return resp.status(200).send({
                status: 200,
                message: "Updating",
                anime: Anime
            });
        }).catch(function (err) {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            });
        });
    };
    StatusController.prototype.setStatusManga = function (req, resp) {
        statusManga_model_1.StatusManga.update({ mangaId: req.body.mangaId, userId: req.body.userId }, req.body, { upsert: true, setDefaultsOnInsert: true }).then(function (Manga) {
            if (!Manga) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                });
            }
            return resp.status(200).send({
                status: 200,
                message: "Updating",
                manga: Manga
            });
        }).catch(function (err) {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            });
        });
    };
    StatusController.prototype.checkStatus = function (req, resp) {
        statusAnime_model_1.StatusAnime.findOne({ animeId: req.body.animeId, userId: req.body.userId }).then(function (Anime) {
            if (!statusAnime_model_1.StatusAnime) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                });
            }
            return resp.status(200).send({
                status: 200,
                message: "Updating",
                anime: Anime
            });
        }).catch(function (err) {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            });
        });
    };
    StatusController.prototype.checkStatusManga = function (req, resp) {
        statusManga_model_1.StatusManga.findOne({ mangaId: req.body.mangaId, userId: req.body.userId }).then(function (Manga) {
            if (!statusManga_model_1.StatusManga) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                });
            }
            return resp.status(200).send({
                status: 200,
                message: "Updating",
                manga: Manga
            });
        }).catch(function (err) {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            });
        });
    };
    return StatusController;
}());
exports.default = StatusController;
