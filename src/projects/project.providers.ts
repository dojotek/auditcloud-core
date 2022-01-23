import { Connection } from 'typeorm';
import { Project } from './entities/project.entity';

export const projectProviders = [
  {
    provide: 'PROJECT_REPOSITORY',
    inject: ['DATABASE_CONNECTION'],
    useFactory: (connection: Connection) => connection.getRepository(Project),
  }
]