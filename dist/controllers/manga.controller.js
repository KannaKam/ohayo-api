"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var manga_model_1 = require("../models/manga.model");
var MangaController = /** @class */ (function () {
    function MangaController() {
    }
    /*
        insertmanga(req:Request, rep:Response){
            Manga.find().then(animeplsfunciona =>{
                animeplsfunciona.forEach(cadaanime =>{
                    Manga.update({_id:cadaanime._id}, {$unset:{alternativeTitles:""}}, {multi: true}).then(animedb => {
                        return "insercion"
                    })
                })
            })
        } */
    MangaController.prototype.findAllManga = function (req, resp) {
        manga_model_1.Manga.find({}).sort({ 'title': 1 }).then(function (Mangas) {
            if (!manga_model_1.Manga) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                });
            }
            return resp.status(200).send({
                status: 200,
                message: "Showing manga",
                mangas: Mangas
            });
        }).catch(function (err) {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            });
        });
    };
    MangaController.prototype.sortManga = function (req, resp) {
        var title = req.body.title;
        manga_model_1.Manga.find({ "title": new RegExp(title, "i") }).then(function (Mangas) {
            if (!Mangas) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                });
            }
            return resp.status(200).send({
                status: 200,
                message: "Showing mangas",
                mangas: Mangas
            });
        }).catch(function (err) {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            });
        });
    };
    return MangaController;
}());
exports.default = MangaController;
