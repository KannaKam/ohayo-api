import { Schema, Document } from 'mongoose'
import mongoose from 'mongoose'

export interface StatusAnime extends Document {
    userId: string,
    status: string,
    animeId:string,
}

const statusAnimeSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User'},
    status: { type: String },
    animeId: { type: Schema.Types.ObjectId, ref: 'Anime' }
},
    {
        timestamps: true
    });

    statusAnimeSchema.method("toJSON", function (this: any) {
    const {
        __v,
        createdAt,
        updatedAt,
        ...object
    } = this.toObject();

    return object;
});


export const StatusAnime = mongoose.model<StatusAnime>('StatusAnime', statusAnimeSchema);