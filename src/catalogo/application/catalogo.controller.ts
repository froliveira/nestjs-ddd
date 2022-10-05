import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { EstoqueService } from '../domain/estoque.service';
import { IEstoqueService } from '../domain/estoque.service.interface';
import { CatalogoService } from './catalogo.service';
import { ICatalogoService } from './catalogo.service.interface';
import { CreateProdutoDto } from './dto/create-produto.dto';

@Controller('produtos')
export class CatalogoController {
  constructor(
    @Inject(CatalogoService) private readonly catalogoService: ICatalogoService,
    @Inject(EstoqueService) private readonly estoqueService: IEstoqueService,
  ) {}

  @Post()
  createProduto(@Body() createProdutoDto: CreateProdutoDto) {
    return this.catalogoService.createProduto(createProdutoDto);
  }

  @Get(':id')
  getProdutoById(@Param('id') id: string) {
    return this.catalogoService.getProdutoById(id);
  }

  @Post('debitar')
  debitarEstoque(@Body() debitarEstoqueDto: any) {
    const produtoId = debitarEstoqueDto.produtoId;
    const quantidade = debitarEstoqueDto.quantidade;
    return this.estoqueService.debitarEstoque(produtoId, quantidade);
  }
}
