import { Router } from "express"
import statusController from "../controllers/status.controller"

const statusRoutes = Router();

statusRoutes.post('/setStatus', statusController.prototype.setStatus);
statusRoutes.post('/checkStatus', statusController.prototype.checkStatus);

statusRoutes.post('/setStatusManga', statusController.prototype.setStatusManga);
statusRoutes.post('/checkStatusManga', statusController.prototype.checkStatusManga);
export default statusRoutes;