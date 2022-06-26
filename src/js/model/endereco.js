class Endereco {
  constructor(rua, numero, cep, complemento, cidade, estado) {
    this._rua = rua;
    this._numero = numero;
    this._cep = cep;
    this._complemento = complemento;
    this._cidade = cidade;
    this._estado = estado;
  }

  //getters
  get rua() {
    return this._rua;
  }

  get numero() {
    return this._numero;
  }

  get cep() {
    return this._cep;
  }

  get complemento() {
    return this._complemento;
  }

  get cidade() {
    return this._cidade;
  }

  get estado() {
    return this._estado;
  }

  //setters
  set rua(value) {
    this._rua = value;
  }

  set numero(value) {
    this._numero = value;
  }

  set cep(value) {
    this._cep = value;
  }

  set complemento(value) {
    this._complemento = value;
  }

  set cidade(value) {
    this._cidade = value;
  }

  set estado(value) {
    this._estado = value;
  }

  //metodos
  getEndereco() {
    return `${this._rua}, ${this._numero}, ${this._cep}, ${this._complemento}, ${this._cidade}, ${this._estado}`;
  }
}
