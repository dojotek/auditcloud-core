import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import * as path from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    DatabaseModule,
    UsersModule,
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
