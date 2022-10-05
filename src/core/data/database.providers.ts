import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost', //TODO: alterar para arquivo de ambiente
        port: 3306, //TODO: alterar para arquivo de ambiente
        username: 'user', //TODO: alterar para arquivo de ambiente
        password: 'user', //TODO: alterar para arquivo de ambiente
        database: 'loja', //TODO: alterar para arquivo de ambiente
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
