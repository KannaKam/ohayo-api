import { Request, Response } from "express"
import { RatingAnime } from '../models/ratingAnime.model';
import { RatingManga } from '../models/ratingManga.model';
import { Anime } from '../models/anime.model'
import { Manga } from '../models/manga.model'
class RatingController {

    setRating(req: Request, resp: Response) {
        RatingAnime.updateOne({ animeId: req.body.animeId, userId: req.body.userId }, req.body, { upsert: true, setDefaultsOnInsert: true }).then((Anime) => {
            if (!RatingAnime) {
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

    setRatingManga(req: Request, resp: Response) {
        RatingManga.updateOne({ mangaId: req.body.mangaId, userId: req.body.userId }, req.body, { upsert: true, setDefaultsOnInsert: true }).then((Manga) => {
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

    checkRating(req: Request, resp: Response) {
        RatingAnime.findOne({ animeId: req.body.animeId, userId: req.body.userId }).then((Anime) => {
            if (!RatingAnime) {
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

    checkRatingManga(req: Request, resp: Response) {
        RatingManga.findOne({ mangaId: req.body.mangaId, userId: req.body.userId }).then((Manga) => {
            if (!RatingAnime) {
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

    calculateAverageRating(req: Request, resp: Response) {
        RatingAnime.find({ animeId: req.body.animeId }, { rating: 1, _id: 0 }).then((AnimeDB) => {
            if (!AnimeDB) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                })
            }
            let avg: number = 0;
            AnimeDB.forEach(anime => {
                avg += anime.rating
            });
            avg = avg / AnimeDB.length;
            console.log(avg);
            Anime.update({ _id: req.body.animeId }, { $set: { "rating": avg } }).then((AnimeDBAvg) => {
                if (!AnimeDBAvg) {
                    return resp.status(500).send({
                        status: 500,
                        message: "Nothing to show :("
                    })
                }
            })
            return resp.status(200).send({
                status: 200,
                message: "Updating",
                anime: AnimeDB
            })
        }).catch((err: any) => {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            })
        })
    }

    calculateAverageRatingManga(req: Request, resp: Response) {
        RatingManga.find({ mangaId: req.body.mangaId }, { rating: 1, _id: 0 }).then((MangaDB) => {
            if (!MangaDB) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                })
            }
            let avg: number = 0;
            MangaDB.forEach(anime => {
                avg += anime.rating
            });
            avg = avg / MangaDB.length;
            Manga.update({ _id: req.body.mangaId }, { $set: { "rating": avg } }).then((MangaDBAvg) => {
                if (!MangaDBAvg) {
                    return resp.status(500).send({
                        status: 500,
                        message: "Nothing to show :("
                    })
                }
            })
            return resp.status(200).send({
                status: 200,
                message: "Updating",
                manga: MangaDB
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

export default RatingController