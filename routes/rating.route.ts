import { Router } from "express"
import ratingController from "../controllers/rating.controller"

const ratingRoutes = Router();

ratingRoutes.post('/setRating', ratingController.prototype.setRating);
ratingRoutes.post('/checkRating', ratingController.prototype.checkRating);
ratingRoutes.post('/calculateAverage', ratingController.prototype.calculateAverageRating);

ratingRoutes.post('/setRatingManga', ratingController.prototype.setRatingManga);
ratingRoutes.post('/checkRatingManga', ratingController.prototype.checkRatingManga);
ratingRoutes.post('/calculateAverageManga', ratingController.prototype.calculateAverageRatingManga);
export default ratingRoutes;