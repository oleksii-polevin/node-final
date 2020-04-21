import { Controller, Get, Post, Body } from '@nestjs/common';
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
        const result = await this.usersService.addUser(completeBody);
        return result as string;
    }
}
