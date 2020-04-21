import { Injectable } from '@nestjs/common';
import { IBook } from './books.model'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {

    constructor(@InjectModel('Book') private bookModel: Model<IBook>) {}


    async getBooks() {
        const result = await this.bookModel.find().exec();
        return result as IBook[];
    }

    async addBook(book: IBook) {
        const newBook = new this.bookModel(book);
        const result = await newBook.save();
        return result.id;
    }
}
