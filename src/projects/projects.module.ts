import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { projectProviders } from './project.providers';
import { ProjectsService } from './projects.service';
import { ProjectsResolver } from './projects.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [...projectProviders, ProjectsResolver, ProjectsService]
})
export class ProjectsModule {}
