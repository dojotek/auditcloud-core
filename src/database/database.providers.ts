import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'auditcloud',
      password: 'auditcloud',
      database: 'auditcloud',
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}'
      ],
      synchronize: true
    })
  }
]