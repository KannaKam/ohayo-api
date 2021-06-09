"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ratingAnime_model_1 = require("../models/ratingAnime.model");
var ratingManga_model_1 = require("../models/ratingManga.model");
var anime_model_1 = require("../models/anime.model");
var manga_model_1 = require("../models/manga.model");
var RatingController = /** @class */ (function () {
    function RatingController() {
    }
    RatingController.prototype.setRating = function (req, resp) {
        ratingAnime_model_1.RatingAnime.updateOne({ animeId: req.body.animeId, userId: req.body.userId }, req.body, { upsert: true, setDefaultsOnInsert: true }).then(function (Anime) {
            if (!ratingAnime_model_1.RatingAnime) {
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
    RatingController.prototype.setRatingManga = function (req, resp) {
        ratingManga_model_1.RatingManga.updateOne({ mangaId: req.body.mangaId, userId: req.body.userId }, req.body, { upsert: true, setDefaultsOnInsert: true }).then(function (Manga) {
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
    RatingController.prototype.checkRating = function (req, resp) {
        ratingAnime_model_1.RatingAnime.findOne({ animeId: req.body.animeId, userId: req.body.userId }).then(function (Anime) {
            if (!ratingAnime_model_1.RatingAnime) {
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
    RatingController.prototype.checkRatingManga = function (req, resp) {
        ratingManga_model_1.RatingManga.findOne({ mangaId: req.body.mangaId, userId: req.body.userId }).then(function (Manga) {
            if (!ratingAnime_model_1.RatingAnime) {
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
    RatingController.prototype.calculateAverageRating = function (req, resp) {
        ratingAnime_model_1.RatingAnime.find({ animeId: req.body.animeId }, { rating: 1, _id: 0 }).then(function (AnimeDB) {
            if (!AnimeDB) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                });
            }
            var avg = 0;
            AnimeDB.forEach(function (anime) {
                avg += anime.rating;
            });
            avg = avg / AnimeDB.length;
            console.log(avg);
            anime_model_1.Anime.update({ _id: req.body.animeId }, { $set: { "rating": avg } }).then(function (AnimeDBAvg) {
                if (!AnimeDBAvg) {
                    return resp.status(500).send({
                        status: 500,
                        message: "Nothing to show :("
                    });
                }
            });
            return resp.status(200).send({
                status: 200,
                message: "Updating",
                anime: AnimeDB
            });
        }).catch(function (err) {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            });
        });
    };
    RatingController.prototype.calculateAverageRatingManga = function (req, resp) {
        ratingManga_model_1.RatingManga.find({ mangaId: req.body.mangaId }, { rating: 1, _id: 0 }).then(function (MangaDB) {
            if (!MangaDB) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                });
            }
            var avg = 0;
            MangaDB.forEach(function (anime) {
                avg += anime.rating;
            });
            avg = avg / MangaDB.length;
            manga_model_1.Manga.update({ _id: req.body.mangaId }, { $set: { "rating": avg } }).then(function (MangaDBAvg) {
                if (!MangaDBAvg) {
                    return resp.status(500).send({
                        status: 500,
                        message: "Nothing to show :("
                    });
                }
            });
            return resp.status(200).send({
                status: 200,
                message: "Updating",
                manga: MangaDB
            });
        }).catch(function (err) {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            });
        });
    };
    return RatingController;
}());
exports.default = RatingController;
