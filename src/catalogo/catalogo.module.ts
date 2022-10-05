import { Module } from '@nestjs/common';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CatalogoController } from './application/catalogo.controller';
import { ProdutoMapper } from './data/produto.mapper';
import { ProdutoRepository } from './data/produto.repository';
import { IProdutoRepository } from './domain/produto.repository.interface';
import { CatalogoService } from './application/catalogo.service';
import { EstoqueService } from './domain/estoque.service';
import { IEstoqueService } from './domain/estoque.service.interface';

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
      provide: EstoqueService,
      useFactory: (repository: IProdutoRepository) => {
        return new EstoqueService(repository);
      },
      inject: [ProdutoRepository],
    },
    {
      provide: CatalogoService,
      useFactory: (
        produtoRepository: IProdutoRepository,
        estoqueService: IEstoqueService,
      ) => {
        return new CatalogoService(produtoRepository, estoqueService);
      },
      inject: [ProdutoRepository, EstoqueService],
    },
  ],
  controllers: [CatalogoController],
})
export class CatalogoModule {}
