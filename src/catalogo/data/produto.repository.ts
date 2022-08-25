import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from '../domain/categoria';
import { Produto } from '../domain/produto';
import { IProdutoRepository } from '../domain/produto-repository.interface';
import { ProdutoMapper } from './produto.mapper';

export class ProdutoRepository implements IProdutoRepository {
  constructor(
    @InjectRepository(ProdutoMapper)
    private repository: Repository<ProdutoMapper>,
  ) {}

  getAll: () => Produto[];

  getById: (id: string) => Produto;

  async create(produto: Produto) {
    const model = this.repository.create(produto);
    const produtoMapper = await this.repository.save(model);

    return produto;
  }

  update: (produto: Produto) => Promise<Produto>;

  addCategoria: (categoria: Categoria) => void;

  updateCategoria: (categoria: Categoria) => void;
}
