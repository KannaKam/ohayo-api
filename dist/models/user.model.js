"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var mongoose_2 = __importDefault(require("mongoose"));
var userSchema = new mongoose_1.Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
    profilePic: { type: String },
    animeList: [{
            type: mongoose_2.default.Schema.Types.ObjectId,
            ref: 'Anime'
        }],
    mangaList: [{
            type: mongoose_2.default.Schema.Types.ObjectId,
            ref: 'Manga'
        }],
    friendList: { type: Array },
    isAdmin: { type: Boolean }
}, {
    timestamps: true
});
userSchema.method("toJSON", function () {
    var _a = this.toObject(), __v = _a.__v, password = _a.password, createdAt = _a.createdAt, updatedAt = _a.updatedAt, object = __rest(_a, ["__v", "password", "createdAt", "updatedAt"]);
    return object;
});
exports.User = mongoose_2.default.model('User', userSchema);
