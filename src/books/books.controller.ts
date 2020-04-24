import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
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
      let result;
      try {
        result = await this.booksService.addBook(completeBody);

      } catch (error) {
        throw new HttpException({
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message,
      }, HttpStatus.INTERNAL_SERVER_ERROR)
      }
        return result as string;
    }
}
