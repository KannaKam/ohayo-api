import { Schema, Document } from 'mongoose'
import mongoose from 'mongoose'

export interface User extends Document {
    username: string,
    email: string,
    password: string,
    profilePic: string,
    animeList: Anime[],
    mangaList: Manga[],
    friendList: string[],
    isAdmin: boolean
}

interface Anime {
    id: string,
}

interface Manga {
    id: string,
}

const userSchema = new Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
    profilePic: { type: String },
    animeList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Anime'
    }],
    mangaList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Manga'
    }],
    friendList: { type: Array },
    isAdmin: { type: Boolean }
},
    {
        timestamps: true
    });

userSchema.method("toJSON", function (this: any) {
    const {
        __v,
        password,
        createdAt,
        updatedAt,
        ...object
    } = this.toObject();

    return object;
});


export const User = mongoose.model<User>('User', userSchema);