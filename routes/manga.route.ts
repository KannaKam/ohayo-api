import { Router } from "express"
import mangaController from "../controllers/manga.controller"

const mangaRoutes = Router();

//mangaRoutes.get('/insertmanga', mangaController.prototype.insertmanga);
mangaRoutes.get('/findAllManga', mangaController.prototype.findAllManga);
mangaRoutes.post('/sortManga', mangaController.prototype.sortManga);
export default mangaRoutes;