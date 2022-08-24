import { IAggregateRoot } from '../core/domainObjects/aggregate-root.interface';
import { Entity } from '../core/domainObjects/entity';
import { Categoria } from './categoria';
import { Dimensoes } from './dimensoes';

export class Produto extends Entity implements IAggregateRoot {
  categoriaId: string;
  nome: string;
  descricao: string;
  ativo: boolean;
  valor: number;
  dataCadastro: Date;
  quantidadeEstoque: number;
  dimensoes: Dimensoes;
  categoria: Categoria;

  constructor(
    nome: string,
    descricao: string,
    ativo: boolean,
    valor: number,
    dataCadastro: Date,
    dimensoes: Dimensoes,
  ) {
    super();

    this.nome = nome;
    this.descricao = descricao;
    this.ativo = ativo;
    this.valor = valor;
    this.dataCadastro = dataCadastro;
    this.dimensoes = dimensoes;

    //TODO: adicionar forma de validação
    this.validar();
  }

  public debitarEstoque(quantidade: number) {
    this.quantidadeEstoque -= quantidade;
  }

  public reporEstoque(quantidade: number) {
    this.quantidadeEstoque += quantidade;
  }

  public possuiEstoque(quantidade: number) {
    return this.quantidadeEstoque >= quantidade;
  }

  public validar() {
    return true;
  }
}
