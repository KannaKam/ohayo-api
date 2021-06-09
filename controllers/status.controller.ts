import { Request, Response } from "express"
import { StatusAnime } from '../models/statusAnime.model';
import { StatusManga } from '../models/statusManga.model';

class StatusController {

    setStatus(req: Request, resp: Response) {
        StatusAnime.update({ animeId: req.body.animeId, userId: req.body.userId }, req.body, { upsert: true, setDefaultsOnInsert: true }).then((Anime) => {
            if (!StatusAnime) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                })
            }
            return resp.status(200).send({
                status: 200,
                message: "Updating",
                anime: Anime
            })
        }).catch((err: any) => {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            })
        })
    }

    setStatusManga(req: Request, resp: Response) {
        StatusManga.update({ mangaId: req.body.mangaId, userId: req.body.userId }, req.body, { upsert: true, setDefaultsOnInsert: true }).then((Manga) => {
            if (!Manga) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                })
            }
            return resp.status(200).send({
                status: 200,
                message: "Updating",
                manga: Manga
            })
        }).catch((err: any) => {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            })
        })
    }

    checkStatus(req: Request, resp: Response) {
        StatusAnime.findOne({ animeId: req.body.animeId, userId: req.body.userId }).then((Anime) => {
            if (!StatusAnime) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                })
            }
            return resp.status(200).send({
                status: 200,
                message: "Updating",
                anime: Anime
            })
        }).catch((err: any) => {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            })
        })
    }

    checkStatusManga(req: Request, resp: Response) {
        StatusManga.findOne({ mangaId: req.body.mangaId, userId: req.body.userId }).then((Manga) => {
            if (!StatusManga) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                })
            }
            return resp.status(200).send({
                status: 200,
                message: "Updating",
                manga: Manga
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

export default StatusController