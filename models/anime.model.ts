import { Schema, Document } from 'mongoose'
import mongoose from 'mongoose'

export interface Anime extends Document {
    title: string,
    type: string,
    episodes: number,
    status: string,
    animeSeason: Season,
    picture: string,
    synonyms: string[],
    tags: string[],
    rating: number
}

interface Season {
    season: string,
    year: number
}

const animeSchema = new Schema({
    title: { type: String, unique: true },
    type: { type: String},
    episodes: { type: Number },
    status: { type: String },
    animeSeason: { type: Object },
    picture: { type: String },
    synonyms: { type: Array },
    tags: { type: Array },
    rating: { type: Number } 
},
    {
        timestamps: true
    });

animeSchema.method("toJSON", function (this: any) {
    const {
        __v,
        createdAt,
        updatedAt,
        ...object
    } = this.toObject();

    return object;
});


export const Anime = mongoose.model<Anime>('Anime', animeSchema);