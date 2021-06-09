import { Request, Response } from "express"
import { Anime } from "../models/anime.model";

class AnimeController {

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


    findAllAnimes(req: Request, resp: Response) {
        Anime.find().then((Animes) => {
            if (!Animes) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                })
            }
            return resp.status(200).send({
                status: 200,
                message: "Showing animes",
                animes: Animes
            })
        }).catch((err: any) => {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            })
        })
    }

    sortAnimes(req: Request, resp: Response) {
        const title = req.body.title;
        Anime.find({ "title": new RegExp(title, "i") }).then((Animes) => {
            if (!Animes) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                })
            }
            return resp.status(200).send({
                status: 200,
                message: "Showing animes",
                animes: Animes
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



export default AnimeController