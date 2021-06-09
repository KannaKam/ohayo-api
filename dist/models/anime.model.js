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
exports.Anime = void 0;
var mongoose_1 = require("mongoose");
var mongoose_2 = __importDefault(require("mongoose"));
var animeSchema = new mongoose_1.Schema({
    title: { type: String, unique: true },
    type: { type: String },
    episodes: { type: Number },
    status: { type: String },
    animeSeason: { type: Object },
    picture: { type: String },
    synonyms: { type: Array },
    tags: { type: Array },
    rating: { type: Number }
}, {
    timestamps: true
});
animeSchema.method("toJSON", function () {
    var _a = this.toObject(), __v = _a.__v, createdAt = _a.createdAt, updatedAt = _a.updatedAt, object = __rest(_a, ["__v", "createdAt", "updatedAt"]);
    return object;
});
exports.Anime = mongoose_2.default.model('Anime', animeSchema);
