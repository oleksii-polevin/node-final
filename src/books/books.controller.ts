import { Controller, Get, Post, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { IBook } from './books.model';

@Controller()
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Get('books')
    async getBooks() {
      const books = await this.booksService.getBooks();
      return books;
    }

    @Post('api/books')
    async addBook(@Body() completeBody: IBook) {
        const result = await this.booksService.addBook(completeBody);
        return result as string;
    }
}
