import { Request, Response } from "express"
import { Manga } from "../models/manga.model";

class MangaController {
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
    findAllManga(req: Request, resp: Response) {
        Manga.find({}).sort({'title':1}).then((Mangas) => {
            if (!Manga) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                })
            }
            return resp.status(200).send({
                status: 200,
                message: "Showing manga",
                mangas: Mangas
            })
        }).catch((err: any) => {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            })
        })
    }

    sortManga(req: Request, resp: Response) {
        const title = req.body.title;
        Manga.find({ "title": new RegExp(title, "i") }).then((Mangas) => {
            if (!Mangas) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                })
            }
            return resp.status(200).send({
                status: 200,
                message: "Showing mangas",
                mangas: Mangas
            })
        }).catch((err: any) => {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            })
        })
    }

}

export default MangaController