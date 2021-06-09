"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_model_1 = require("../models/user.model");
var Token_1 = __importDefault(require("../classes/Token"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var userController = /** @class */ (function () {
    function userController() {
    }
    userController.prototype.signUp = function (req, res) {
        var saltRounds = 10;
        var params = req.body;
        bcrypt_1.default.hash(params.password, saltRounds, function (err, hash) {
            var newUser = new user_model_1.User();
            newUser.username = params.username;
            newUser.email = params.email;
            newUser.password = hash;
            user_model_1.User.create(newUser).then(function (userDB) {
                if (!userDB) {
                    return res.status(500).send({
                        status: 500,
                        message: "Error creating user",
                        error: err
                    });
                }
                return res.status(201).send({
                    status: 201,
                    message: "User created succesfully",
                    user: userDB
                });
            }).catch(function (err) {
                return res.status(500).send({
                    status: 500,
                    error: err,
                    message: "Error connecting to database"
                });
            });
        });
    };
    userController.prototype.signIn = function (req, res) {
        var params = req.body;
        user_model_1.User.findOne({ username: params.username }).then(function (userDB) {
            if (!userDB) {
                return res.status(500).send({
                    status: 500,
                    message: "Incorrect credentials"
                });
            }
            bcrypt_1.default.compare(params.password, userDB.password, function (err, result) {
                if (result == true) {
                    return res.status(200).send({
                        status: 200,
                        message: "Logged succesfully",
                        user: userDB,
                        token: Token_1.default.generateToken(userDB)
                    });
                }
                else {
                    return res.status(500).send({
                        status: 500,
                        message: "Incorrect credentials"
                    });
                }
            });
        }).catch(function (err) {
            return res.status(500).send({
                status: 500,
                message: "Error connecting to database.",
                error: err
            });
        });
    };
    userController.prototype.findUserById = function (req, res) {
        var params = req.body;
        user_model_1.User.findOne({ _id: params._id }).then(function (userDB) {
            if (!userDB) {
                return res.status(500).send({
                    status: 500,
                    message: "User not found :("
                });
            }
            return res.status(200).send({
                status: 200,
                message: "User found",
                user: userDB
            });
        }).catch(function (err) {
            return res.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            });
        });
    };
    userController.prototype.findAnimeList = function (req, res) {
        var params = req.body;
        user_model_1.User.findOne({ _id: params._id }).populate({ path: 'animeList' }).then(function (userDB) {
            if (!userDB) {
                return res.status(500).send({
                    status: 500,
                    message: "User not found :("
                });
            }
            return res.status(200).send({
                status: 200,
                message: "User found",
                user: userDB
            });
        }).catch(function (err) {
            return res.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            });
        });
    };
    userController.prototype.findMangaList = function (req, res) {
        var params = req.body;
        user_model_1.User.findOne({ _id: params._id }).populate({ path: 'mangaList' }).then(function (userDB) {
            if (!userDB) {
                return res.status(500).send({
                    status: 500,
                    message: "User not found :("
                });
            }
            return res.status(200).send({
                status: 200,
                message: "User found",
                user: userDB
            });
        }).catch(function (err) {
            return res.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            });
        });
    };
    userController.prototype.updateAnimeList = function (req, res) {
        var params = req.body;
        user_model_1.User.update({ _id: params.userId }, { $addToSet: { animeList: params.animeId } }).then(function (userDB) {
            if (!userDB) {
                return res.status(500).send({
                    status: 500,
                    message: "User not found :("
                });
            }
            return res.status(200).send({
                status: 200,
                message: "User found",
                user: userDB
            });
        }).catch(function (err) {
            return res.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            });
        });
    };
    userController.prototype.updateMangaList = function (req, res) {
        var params = req.body;
        user_model_1.User.update({ _id: params.userId }, { $addToSet: { mangaList: params.mangaId } }).then(function (userDB) {
            if (!userDB) {
                return res.status(500).send({
                    status: 500,
                    message: "User not found :("
                });
            }
            return res.status(200).send({
                status: 200,
                message: "User found",
                user: userDB
            });
        }).catch(function (err) {
            return res.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            });
        });
    };
    userController.prototype.editUsername = function (req, res) {
        var params = req.body;
        console.log(params);
        user_model_1.User.updateOne({ _id: params._id }, { $set: { username: params.username } }).then(function (userDB) {
            if (!userDB) {
                return res.status(500).send({
                    status: 500,
                    message: "User not found :("
                });
            }
            return res.status(200).send({
                status: 200,
                message: "User found",
                user: userDB
            });
        }).catch(function (err) {
            return res.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            });
        });
    };
    return userController;
}());
exports.default = userController;
