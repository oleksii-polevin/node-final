import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
    blogpost: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    published: {
        publisher: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        }
    }
})

export interface IBook extends mongoose.Document {
    blogpost: number,
    title: string,
    author: string,
    published: {
        publisher: string,
        year: number,
    }
}