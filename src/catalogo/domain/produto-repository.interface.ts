import { IRepository } from 'src/core/data/repository.interface';
import { Categoria } from './categoria';
import { Produto } from './produto';

export interface IProdutoRepository extends IRepository<Produto> {
  getAll: () => Produto[];
  getById: (id: string) => Produto;

  create: (produto: Produto) => Promise<Produto>;
  update: (produto: Produto) => Promise<Produto>;

  addCategoria: (categoria: Categoria) => void;
  updateCategoria: (categoria: Categoria) => void;
}
