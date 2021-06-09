import { Request, Response } from "express"
import { User } from "../models/user.model";
import Token from "../classes/Token";
import bcrypt from "bcrypt"

class userController {

    signUp(req: Request, res: Response) {
        const saltRounds = 10;
        let params = req.body;
        bcrypt.hash(params.password, saltRounds, function (err, hash) {
            const newUser = new User();
            newUser.username = params.username;
            newUser.email = params.email;
            newUser.password = hash;
            User.create(newUser).then(userDB => {
                if (!userDB) {
                    return res.status(500).send({
                        status: 500,
                        message: "Error creating user",
                        error: err
                    })
                }
                return res.status(201).send({
                    status: 201,
                    message: "User created succesfully",
                    user: userDB
                })
            }).catch(err => {
                return res.status(500).send({
                    status: 500,
                    error: err,
                    message: "Error connecting to database"
                })
            });
        });
    }

    signIn(req: Request, res: Response) {
        const params = req.body;
        User.findOne({ username: params.username }).then((userDB) => {
            if (!userDB) {
                return res.status(500).send({
                    status: 500,
                    message: "Incorrect credentials"
                })
            }

            bcrypt.compare(params.password, userDB.password, function (err, result) {
                if (result == true) {
                    return res.status(200).send({
                        status: 200,
                        message: "Logged succesfully",
                        user: userDB,
                        token: Token.generateToken(userDB)
                    })
                } else {
                    return res.status(500).send({
                        status: 500,
                        message: "Incorrect credentials"
                    })
                }

            });

        }).catch(err => {
            return res.status(500).send({
                status: 500,
                message: "Error connecting to database.",
                error: err
            })
        })
    }

    findUserById(req: Request, res: Response) {
        const params = req.body;
        User.findOne({ _id: params._id }).then((userDB) => {
            if (!userDB) {
                return res.status(500).send({
                    status: 500,
                    message: "User not found :("
                })
            }
            return res.status(200).send({
                status: 200,
                message: "User found",
                user: userDB
            })
        }).catch((err: any) => {
            return res.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            })
        })
    }

    findAnimeList(req: Request, res: Response) {
        const params = req.body;
        User.findOne({ _id: params._id }).populate({path:'animeList'}).then((userDB) => {
            if (!userDB) {
                return res.status(500).send({
                    status: 500,
                    message: "User not found :("
                })
            }
            return res.status(200).send({
                status: 200,
                message: "User found",
                user: userDB
            })
        }).catch((err: any) => {
            return res.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            })
        })
    }

    findMangaList(req: Request, res: Response) {
        const params = req.body;
        User.findOne({ _id: params._id }).populate({path:'mangaList'}).then((userDB) => {
            if (!userDB) {
                return res.status(500).send({
                    status: 500,
                    message: "User not found :("
                })
            }
            return res.status(200).send({
                status: 200,
                message: "User found",
                user: userDB
            })
        }).catch((err: any) => {
            return res.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            })
        })
    }

    updateAnimeList(req: Request, res: Response) {
        const params = req.body;
        User.update({ _id: params.userId }, { $addToSet: { animeList: params.animeId } }).then((userDB) => {
            if (!userDB) {
                return res.status(500).send({
                    status: 500,
                    message: "User not found :("
                })
            }
            return res.status(200).send({
                status: 200,
                message: "User found",
                user: userDB
            })
        }).catch((err: any) => {
            return res.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            })
        })
    }

    updateMangaList(req: Request, res: Response) {
        const params = req.body;
        User.update({ _id: params.userId }, { $addToSet: { mangaList: params.mangaId } }).then((userDB) => {
            if (!userDB) {
                return res.status(500).send({
                    status: 500,
                    message: "User not found :("
                })
            }
            return res.status(200).send({
                status: 200,
                message: "User found",
                user: userDB
            })
        }).catch((err: any) => {
            return res.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            })
        })
    }

    editUsername(req: Request, res: Response) {
        const params = req.body;
        console.log(params)
        User.updateOne({ _id: params._id }, {$set:{username: params.username}}).then((userDB) => {
            if (!userDB) {
                return res.status(500).send({
                    status: 500,
                    message: "User not found :("
                })
            }
            return res.status(200).send({
                status: 200,
                message: "User found",
                user: userDB
            })
        }).catch((err: any) => {
            return res.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            })
        })
    }
}

export default userController