import { Schema, Document } from 'mongoose'
import mongoose from 'mongoose'

export interface StatusManga extends Document {
    userId: string,
    status: string,
    mangaId: string,
}

const statusMangaSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    status: { type: String },
    mangaId: { type: Schema.Types.ObjectId, ref: 'Manga' }
},
    {
        timestamps: true
    });

statusMangaSchema.method("toJSON", function (this: any) {
    const {
        __v,
        createdAt,
        updatedAt,
        ...object
    } = this.toObject();

    return object;
});


export const StatusManga = mongoose.model<StatusManga>('StatusManga', statusMangaSchema);