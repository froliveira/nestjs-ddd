import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoService } from './domain/produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';

@Controller('produtos')
export class CatalogoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  createProduto(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.create(createProdutoDto);
  }
}
