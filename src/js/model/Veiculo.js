export class Veiculo {
  constructor(tipo, ano, quilometragem, fabricante, placa, valor) {
    this._tipo = tipo;
    this._ano = ano;
    this._quilometragem = quilometragem;
    this._fabricante = fabricante;
    this._placa = placa;
    this._valor = valor;
  }

  //getters
  get tipo() {
    return this._tipo;
  }

  get ano() {
    return this._ano;
  }

  get quilometragem() {
    return this._quilometragem;
  }

  get fabricante() {
    return this._fabricante;
  }

  get placa() {
    return this._placa;
  }

  get valor() {
    return this._valor;
  }

  //setters
  set tipo(value) {
    this._tipo = value;
  }

  set ano(value) {
    this._ano = value;
  }

  set quilometragem(value) {
    this._quilometragem = value;
  }

  set fabricante(value) {
    this._fabricante = value;
  }

  set placa(value) {
    this._placa = value;
  }

  set valor(value) {
    this._valor = value;
  }
}
