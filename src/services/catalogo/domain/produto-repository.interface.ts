import { IRepository } from '../core/data/repository.interface';
import { Categoria } from './categoria';
import { Produto } from './produto';

export interface IProdutoRepository extends IRepository<Produto> {
  getAll: () => Produto[];
  getById: (id: string) => Produto;

  addProduto: (produto: Produto) => void;
  updateProduto: (produto: Produto) => void;

  addCategoria: (categoria: Categoria) => void;
  updateCategoria: (categoria: Categoria) => void;
}
