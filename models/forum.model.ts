import { Schema, Document } from 'mongoose'
import mongoose from 'mongoose'

export interface ForumThread extends Document {
    title: string,
    userId: string,
    messages: Message[]
}

export interface Message {
    userId: string,
    message: string
}

const forumThreadSchema = new Schema({
    title: { type: String },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    messages: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        message: { type: String }

    }]
},
    {
        timestamps: true
    });

forumThreadSchema.method("toJSON", function (this: any) {
    const {
        __v,
        createdAt,
        ...object
    } = this.toObject();

    return object;
});


export const ForumThread = mongoose.model<ForumThread>('ForumThread', forumThreadSchema);