class TelefoneCelular {
  constructor(proprietario, ddd, numero) {
    this._proprietario = proprietario;
    this._ddd = ddd;
    this._numero = numero;
  }

  //getters
  get proprietario() {
    return this._proprietario;
  }

  get ddd() {
    return this._ddd;
  }

  get numero() {
    return this._numero;
  }

  //setters
  set proprietario(value) {
    this._proprietario = value;
  }

  set ddd(value) {
    this._ddd = value;
  }

  set numero(value) {
    this._numero = value;
  }
}
