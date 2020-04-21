import { Injectable } from '@nestjs/common';
import { IUser } from './users.model'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private userModel: Model<IUser>) {}


    async getUsers() {
        const result = await this.userModel.find().exec();
        return result as IUser[];
    }

    async addUser(book: IUser) {
        const newUser = new this.userModel(book);
        const result = await newUser.save();
        return result.id;
    }
}
