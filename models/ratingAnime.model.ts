import { Schema, Document } from 'mongoose'
import mongoose from 'mongoose'

export interface RatingAnime extends Document {
    userId: string,
    rating: number,
    animeId:string
}



const ratingAnimeSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User'},
    rating: { type: Number },
    animeId: { type: Schema.Types.ObjectId, ref: 'Anime' }
},
    {
        timestamps: true
    });

    ratingAnimeSchema.method("toJSON", function (this: any) {
    const {
        __v,
        createdAt,
        updatedAt,
        ...object
    } = this.toObject();

    return object;
});


export const RatingAnime = mongoose.model<RatingAnime>('RatingAnime', ratingAnimeSchema);