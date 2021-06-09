import { Router } from "express"
import forumThreadController from "../controllers/forum.controller"

const forumRoutes = Router();

forumRoutes.post('/createThread', forumThreadController.prototype.createThread);
forumRoutes.post('/deleteThread', forumThreadController.prototype.deleteThread);
forumRoutes.post('/commentThread', forumThreadController.prototype.commentThread);
forumRoutes.get('/findAllThreads', forumThreadController.prototype.findAllThreads);
forumRoutes.put('/editThread', forumThreadController.prototype.editThread);

export default forumRoutes;