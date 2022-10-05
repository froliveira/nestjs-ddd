import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('produto')
export class ProdutoMapper {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  ativo: boolean;

  @Column({ type: 'decimal', scale: 2 })
  valor: number;

  @Column()
  dataCadastro: Date;

  @Column()
  quantidadeEstoque: number;

  //dimensoes: Dimensoes;
  //categoria: Categoria;
}
