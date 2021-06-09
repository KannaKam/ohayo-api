import { Schema, Document } from 'mongoose'
import mongoose from 'mongoose'

export interface RatingManga extends Document {
    userId: string,
    rating: number,
    mangaId: string
}



const ratingMangaSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    rating: { type: Number },
    mangaId: { type: Schema.Types.ObjectId, ref: 'Manga' }
},
    {
        timestamps: true
    });

ratingMangaSchema.method("toJSON", function (this: any) {
    const {
        __v,
        createdAt,
        updatedAt,
        ...object
    } = this.toObject();

    return object;
});


export const RatingManga = mongoose.model<RatingManga>('RatingManga', ratingMangaSchema);