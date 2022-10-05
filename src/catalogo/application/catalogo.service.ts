import { CreateProdutoDto } from './dto/create-produto.dto';
import { Produto } from '../domain/produto';
import { IProdutoRepository } from '../domain/produto.repository.interface';
import { Injectable } from '@nestjs/common';
import { IEstoqueService } from '../domain/estoque.service.interface';
import { ICatalogoService } from './catalogo.service.interface';

@Injectable()
export class CatalogoService implements ICatalogoService {
  // pode ser usado um repositório ou um serviço
  constructor(
    private readonly produtoRepository: IProdutoRepository,
    private readonly estoqueService: IEstoqueService,
  ) {}

  async createProduto(createProdutoDto: CreateProdutoDto) {
    //TODO: adicionar mapper automático
    const produto = new Produto(
      createProdutoDto.nome,
      createProdutoDto.descricao,
      createProdutoDto.ativo,
      createProdutoDto.valor,
      createProdutoDto.dataCadastro,
      createProdutoDto.quantidadeEstoque,
    );

    const produtoCreated = await this.produtoRepository.create(produto);

    /*const produtoDto: ReadProdutoDto = {
      id: produtoCreated.id,
      descricao: produtoCreated.descricao,
      nome: produtoCreated.nome,
      dataCadastro: produtoCreated.dataCadastro,
      quantidadeEstoque: produtoCreated.quantidadeEstoque,
      valor: produtoCreated.valor,
      ativo: produtoCreated.ativo,
    };*/

    return produtoCreated;
  }

  async getProdutoById(id: string) {
    return await this.produtoRepository.getById(id);
  }

  debitarEstoque(produtoId: string, quantidade: number) {
    return this.estoqueService.debitarEstoque(produtoId, quantidade);
  }
}
