export class Dimensoes {
  altura: number;
  largura: number;
  profundiadde: number;

  constructor(altura: number, largura: number, profundidade: number) {
    this.altura = altura;
    this.largura = largura;
    this.profundiadde = profundidade;

    //TODO: adicionar forma de validação
    this.validar();
  }

  public descricaoFormatada() {
    return `LxAxP ${this.largura} x ${this.altura} x ${this.profundiadde}`;
  }

  public validar() {
    return true;
  }
}
