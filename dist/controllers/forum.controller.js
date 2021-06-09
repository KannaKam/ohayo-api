"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var forum_model_1 = require("../models/forum.model");
var ForumController = /** @class */ (function () {
    function ForumController() {
    }
    ForumController.prototype.createThread = function (req, resp) {
        var _this = this;
        forum_model_1.ForumThread.create(req.body).then(function (Thread) { return __awaiter(_this, void 0, void 0, function () {
            var newThread;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!Thread) {
                            return [2 /*return*/, resp.status(500).send({
                                    status: 500,
                                    message: "Nothing to show :("
                                })];
                        }
                        return [4 /*yield*/, forum_model_1.ForumThread.find({ _id: Thread._id }).populate({ path: 'userId' }).populate({ path: 'messages.userId' })];
                    case 1:
                        newThread = _a.sent();
                        return [2 /*return*/, resp.status(200).send({
                                status: 200,
                                message: "Creating thread",
                                thread: newThread
                            })];
                }
            });
        }); }).catch(function (err) {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            });
        });
    };
    ForumController.prototype.findAllThreads = function (req, resp) {
        forum_model_1.ForumThread.find().populate({ path: 'userId' }).populate({ path: 'messages.userId' }).then(function (Thread) {
            if (!Thread) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                });
            }
            return resp.status(200).send({
                status: 200,
                message: "Showing threads",
                threads: Thread
            });
        }).catch(function (err) {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            });
        });
    };
    ForumController.prototype.deleteThread = function (req, resp) {
        forum_model_1.ForumThread.deleteOne({ _id: req.body.thread._id }).then(function (Thread) {
            if (!Thread) {
                return resp.status(500).send({
                    status: 500,
                    message: "Nothing to show :("
                });
            }
            return resp.status(200).send({
                status: 200,
                message: "Deleting thread"
            });
        }).catch(function (err) {
            return resp.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            });
        });
    };
    ForumController.prototype.commentThread = function (req, res) {
        var params = req.body;
        forum_model_1.ForumThread.updateOne({ _id: params.threadId }, { $push: { messages: params.message } }).then(function (Thread) {
            if (!Thread) {
                return res.status(500).send({
                    status: 500,
                    message: "Thread not found"
                });
            }
            return res.status(200).send({
                status: 200,
                message: "Commenting thread",
                thread: Thread
            });
        }).catch(function (err) {
            return res.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            });
        });
    };
    ForumController.prototype.editThread = function (req, res) {
        var params = req.body.thread;
        console.log(params);
        forum_model_1.ForumThread.updateOne({ _id: params._id }, params).then(function (Thread) {
            if (!Thread) {
                return res.status(500).send({
                    status: 500,
                    message: "Thread not found"
                });
            }
            return res.status(200).send({
                status: 200,
                message: "Commenting thread",
                thread: Thread
            });
        }).catch(function (err) {
            return res.status(500).send({
                status: 500,
                message: "Error with the database",
                error: err
            });
        });
    };
    return ForumController;
}());
exports.default = ForumController;
