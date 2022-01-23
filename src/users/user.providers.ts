import { Connection } from 'typeorm';
import { User } from './entities/user.entity';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    inject: ['DATABASE_CONNECTION'],
    useFactory: (connection: Connection) => connection.getRepository(User),
  }
]