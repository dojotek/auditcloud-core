import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { ProjectsController } from './projects/projects.controller';
import { HeadlinesController } from './headlines/headlines.controller';
import { ControlsController } from './controls/controls.controller';
import { NotesController } from './notes/notes.controller';
import { DocumentsController } from './documents/documents.controller';
import { TodosController } from './todos/todos.controller';
import { ExportsController } from './exports/exports.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true
    })
  ],
  controllers: [AppController, ProjectsController, HeadlinesController, ControlsController, NotesController, DocumentsController, TodosController, ExportsController],
  providers: [AppService],
})
export class AppModule {}
