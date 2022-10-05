import { Produto } from './produto';

export interface IEstoqueService {
  debitarEstoque: (produtoId: string, quantidade: number) => Promise<Produto>;
  reporEstoque: (produtoId: string, quantidade: number) => Produto;
}
