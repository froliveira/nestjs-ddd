import { IEstoqueService } from './estoque.service.interface';
import { IProdutoRepository } from './produto-repository.interface';

// Deve fazer parte de um processo de negócio
// Deve representar ações necessárias para o negócio
export class EstoqueService implements IEstoqueService {
  constructor(private readonly produtoRepository: IProdutoRepository) {}

  debitarEstoque(produtoId: string, quantidade: number) {
    const produto = this.produtoRepository.getById(produtoId);

    if (!produto) throw new Error('');
    if (!produto.possuiEstoque(quantidade)) throw new Error('');

    produto.debitarEstoque(quantidade);

    return this.produtoRepository.update(produto);
  }

  reporEstoque(produtoId: string, quantidade: number) {
    const produto = this.produtoRepository.getById(produtoId);

    if (!produto) throw new Error('');

    produto.reporEstoque(quantidade);

    return this.produtoRepository.update(produto);
  }
}
