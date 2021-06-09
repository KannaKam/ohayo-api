"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var anime_model_1 = require("../models/anime.model");
var AnimeController = /** @class */ (function () {
    function AnimeController() {
    }
    //TODO: Añadir al documento
    /*inserAnime(req:Request, rep:Response){
        Anime.find().then(animeplsfunciona =>{
            animeplsfunciona.forEach(cadaanime =>{
                Anime.update({_id:cadaanime._id}, {$unset:{relations:""}}, {multi: true}).then(animedb => {
                    return "insercion"
                })
            })
        })
    }*/
    AnimeController.prototype.findAllAnimes = function (req, resp) {
        anime_model_1.Anime.find().then(function (Animes) {
            if (!Animes) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                });
            }
            return resp.status(200).send({
                status: 200,
                message: "Showing animes",
                animes: Animes
            });
        }).catch(function (err) {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            });
        });
    };
    AnimeController.prototype.sortAnimes = function (req, resp) {
        var title = req.body.title;
        anime_model_1.Anime.find({ "title": new RegExp(title, "i") }).then(function (Animes) {
            if (!Animes) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                });
            }
            return resp.status(200).send({
                status: 200,
                message: "Showing animes",
                animes: Animes
            });
        }).catch(function (err) {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            });
        });
    };
    return AnimeController;
}());
exports.default = AnimeController;
