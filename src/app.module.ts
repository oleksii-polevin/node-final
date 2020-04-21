import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';

@Module({ 
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest-heroku', {
    // parser if they find a bug in the new parse
    useNewUrlParser: true,
    useUnifiedTopology: true,
}), BooksModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
