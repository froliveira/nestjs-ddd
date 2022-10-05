import { DataSource } from 'typeorm';
import { ProdutoMapper } from './data/produto.mapper';

export const catalogoProviders = [
  {
    provide: 'CATALOGO_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProdutoMapper),
    inject: ['DATA_SOURCE'],
  },
];
