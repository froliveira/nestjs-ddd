import { CreateProdutoDto } from '../dto/create-produto.dto';
import { Produto } from './produto';
import { IProdutoRepository } from './produto-repository.interface';

export class ProdutoService {
  constructor(private readonly produtoRepository: IProdutoRepository) {}

  create(createProdutoDto: CreateProdutoDto) {
    const produto = new Produto(
      createProdutoDto.nome,
      createProdutoDto.descricao,
      createProdutoDto.ativo,
      createProdutoDto.valor,
      createProdutoDto.dataCadastro,
      createProdutoDto.quantidadeEstoque,
    );

    return this.produtoRepository.create(produto);
  }
}
