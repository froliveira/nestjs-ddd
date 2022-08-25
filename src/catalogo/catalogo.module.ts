import { Module } from '@nestjs/common';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CatalogoController } from './catalogo.controller';
import { ProdutoMapper } from './data/produto.mapper';
import { ProdutoRepository } from './data/produto.repository';
import { IProdutoRepository } from './domain/produto-repository.interface';
import { ProdutoService } from './domain/produto.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutoMapper])],
  providers: [
    {
      provide: ProdutoRepository,
      useFactory: (dataSource: DataSource) => {
        return new ProdutoRepository(dataSource.getRepository(ProdutoMapper));
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: ProdutoService,
      useFactory: (repository: IProdutoRepository) => {
        return new ProdutoService(repository);
      },
      inject: [ProdutoRepository],
    },
  ],
  controllers: [CatalogoController],
})
export class CatalogoModule {}
