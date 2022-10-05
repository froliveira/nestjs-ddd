import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from '../domain/categoria';
import { Produto } from '../domain/produto';
import { IProdutoRepository } from '../domain/produto.repository.interface';
import { ProdutoMapper } from './produto.mapper';

@Injectable()
export class ProdutoRepository implements IProdutoRepository {
  constructor(
    @InjectRepository(ProdutoMapper)
    private repository: Repository<ProdutoMapper>,
  ) {}

  getAll: () => Produto[];

  async getById(id: string) {
    const produto = await this.repository.findOneBy({ id: id });

    return <Produto>produto;
  }

  async create(produto: Produto) {
    const model = this.repository.create(produto);
    const produtoMapper = await this.repository.save(model);

    return <Produto>{ id: produtoMapper.id, ...produto };
  }

  async update(produto: Produto) {
    const produtoMapper = await this.repository.save(produto);

    return <Produto>{ id: produtoMapper.id, ...produto };
  }

  addCategoria: (categoria: Categoria) => void;

  updateCategoria: (categoria: Categoria) => void;
}
