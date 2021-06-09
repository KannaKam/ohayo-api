import { Router } from "express"
import animeController from "../controllers/anime.controller"

const animeRoutes = Router();

//animeRoutes.get('/insertAnimes', animeController.prototype.inserAnime);
animeRoutes.get('/findAllAnimes', animeController.prototype.findAllAnimes);
animeRoutes.post('/sortAnimes', animeController.prototype.sortAnimes);
export default animeRoutes;