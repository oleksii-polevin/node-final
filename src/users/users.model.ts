import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
    },
    verified: {
        type: Boolean,
        required: true,
    }
});

export interface IUser extends mongoose.Document {
    firstName: string,
    lastName: string,
    email: string,
    phone: number,
    isAdmin: boolean,
    verified: boolean,
}