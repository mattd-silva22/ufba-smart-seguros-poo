export class Imovel {
  constructor(valor, area, endereco, tipo) {
    this._valor = valor;
    this._area = area;
    this._endereco = endereco;
    this._tipo = tipo;
  }

  //getters

  get valor() {
    return this._valor;
  }

  get area() {
    return this._area;
  }

  get endereco() {
    return this._endereco;
  }

  get tipo() {
    return this._tipo;
  }

  //setters

  set valor(value) {
    this._valor = value;
  }

  set area(value) {
    this._area = value;
  }

  set endereco(value) {
    this._endereco = value;
  }

  set tipo(value) {
    this._tipo = value;
  }
}
