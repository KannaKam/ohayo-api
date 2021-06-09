import { Request, Response } from "express";

import Token from "../classes/Token";
import { User } from "../models/user.model";

class AuthController {
  
  async renewToken(req: Request, resp: Response) {
   
    const _id = req.body._id;
    try {
      const userDB = await User.findOne({ _id });

      if (!userDB) {
        return resp.status(400).send({
          ok: false,
          msg: "User not found",
        });
      }
      resp.send({
        ok: true,
        token: Token.generateToken(req.body),
        user: userDB,
      });
    } catch (err: any) {
      resp.status(500).send({
        ok: false,
        msg: err,
      });
    }
  }
}

export default AuthController;