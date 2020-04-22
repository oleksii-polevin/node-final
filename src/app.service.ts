import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<a href="https://agile-reef-20360.herokuapp.com/users">users</a><br>
    <a href="https://agile-reef-20360.herokuapp.com/books">books</a>`;
  }
}
