import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<div style="color: blue; text-align: center; font-size:30px;">
    <a href="https://agile-reef-20360.herokuapp.com/users">users</a><br><br>
    <a href="https://agile-reef-20360.herokuapp.com/books">books</a></div>
    <div style="color: black; test-align: left; font-size:25px"><br>
    for postman:<br> https://agile-reef-20360.herokuapp.com/app/users<br>
    https://agile-reef-20360.herokuapp.com/app/books</div>`;
  }
}
