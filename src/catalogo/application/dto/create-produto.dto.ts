import {
  IsBoolean,
  IsNotEmpty,
  IsInt,
  IsISO8601,
  IsString,
  MinLength,
  IsNumber,
} from 'class-validator';

export class CreateProdutoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @MinLength(10)
  @IsString()
  descricao: string;

  @IsNotEmpty()
  @IsNumber()
  valor: number;

  @IsNotEmpty()
  @IsISO8601()
  dataCadastro: Date;

  @IsNotEmpty()
  @IsInt()
  quantidadeEstoque: number;

  @IsNotEmpty()
  @IsBoolean()
  ativo: boolean;
}
