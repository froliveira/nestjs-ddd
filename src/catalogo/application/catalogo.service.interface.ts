import { Produto } from '../domain/produto';
import { CreateProdutoDto } from './dto/create-produto.dto';

export interface ICatalogoService {
  createProduto: (createProdutoDto: CreateProdutoDto) => Promise<Produto>;
  getProdutoById: (id: string) => Promise<Produto>;
  debitarEstoque: (produtoId: string, quantidade: number) => Promise<Produto>;
}
