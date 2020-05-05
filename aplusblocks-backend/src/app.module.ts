import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { LibraryController } from './library/library.controller';
import { AssignmentsController } from './assignments/assignments.controller';
import { StudentsController } from './students/students.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, LibraryController, AssignmentsController, StudentsController],
  providers: [AppService],
})
export class AppModule {}
