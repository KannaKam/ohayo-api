import { Router } from "express"
import userController from "../controllers/user.controller"

const userRoutes = Router();

userRoutes.post('/signUp', userController.prototype.signUp);
userRoutes.post('/signIn', userController.prototype.signIn);
userRoutes.post('/findUserById', userController.prototype.findUserById);
userRoutes.post('/updateAnimeList', userController.prototype.updateAnimeList);
userRoutes.post('/updateMangaList', userController.prototype.updateMangaList);
userRoutes.post('/findAnimeList', userController.prototype.findAnimeList);
userRoutes.post('/findMangaList', userController.prototype.findMangaList);
userRoutes.post('/editUsername', userController.prototype.editUsername);

export default userRoutes;