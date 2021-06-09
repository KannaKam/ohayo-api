import { Schema, Document } from 'mongoose'
import mongoose from 'mongoose'

export interface Manga extends Document {
    title: string,
    rating: number,
    id: number,
    imageRemotePath: string,
    genres: string[],
    alternativeTitles: string[],
    staff: Staff[]
}

interface Staff {
    person: string,
    task: number
}

const mangaSchema = new Schema({
    title: { type: String, unique: true },
    rating: { type: Number },
    id: { type: Number },
    imageRemotePath: { type: String },
    genres: { type: Array },
    alternativeTitles: { type: String },
    staff: { type: Array }
},
    {
        timestamps: true
    });

mangaSchema.method("toJSON", function (this: any) {
    const {
        __v,
        createdAt,
        updatedAt,
        ...object
    } = this.toObject();

    return object;
});


export const Manga = mongoose.model<Manga>('Manga', mangaSchema);