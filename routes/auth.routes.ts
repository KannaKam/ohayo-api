import { Router } from "express";

import authentication from "../middlewares/Auth";
import AuthController from "../controllers/auth.controller";


const authRoutes = Router();

authRoutes.get("/renew", authentication, AuthController.prototype.renewToken);

export default authRoutes;