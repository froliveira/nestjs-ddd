import { Injectable } from '@nestjs/common';
import { IEstoqueService } from './estoque.service.interface';
import { Produto } from './produto';
import { IProdutoRepository } from './produto.repository.interface';

// Deve fazer parte de um processo de negócio
// Deve representar ações necessárias para o negócio
@Injectable()
export class EstoqueService implements IEstoqueService {
  constructor(private readonly produtoRepository: IProdutoRepository) {}

  reporEstoque: (produtoId: string, quantidade: number) => Produto;

  async debitarEstoque(produtoId: string, quantidade: number) {
    const produtoMapper = await this.produtoRepository.getById(produtoId);

    const produto = new Produto(
      produtoMapper.nome,
      produtoMapper.descricao,
      produtoMapper.ativo,
      produtoMapper.valor,
      produtoMapper.dataCadastro,
      produtoMapper.quantidadeEstoque,
    );

    produto.id = produtoMapper.id;

    if (!produto) throw new Error('');
    if (!produto.possuiEstoque(quantidade)) {
      throw new Error('Produto sem estoque.');
    }

    produto.debitarEstoque(quantidade);

    return this.produtoRepository.update(produto);
  }

  /*
  reporEstoque(produtoId: string, quantidade: number) {
    const produto = this.produtoRepository.getById(produtoId);

    if (!produto) throw new Error('');

    produto.reporEstoque(quantidade);

    return this.produtoRepository.update(produto);
  }
  */
}
