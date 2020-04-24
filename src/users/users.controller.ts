import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from './users.model';

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('users')
    async getBooks() {
      const users = await this.usersService.getUsers();
      return users;
    }

    @Post('api/users')
    async addBook(@Body() completeBody: IUser) {
      let result: string;
      try {
        result = await this.usersService.addUser(completeBody);
      } catch (error) {
        throw new HttpException({
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message,
      }, HttpStatus.INTERNAL_SERVER_ERROR)
      }
        return result as string;
    }
}
