class User {
  constructor(nome, email, dataRegistro, tipo) {
    this._nomeUsuario = nome;
    this._emailUsuario = email;
    this._dataRegistroUsuario = dataRegistro;
    this._tipoUsuario = tipo;
  }

  //getters
  get nomeUsuario() {
    return this._nomeUsuario;
  }

  get emailUsuario() {
    return this._emailUsuario;
  }

  get dataRegistroUsuario() {
    return this._dataRegistroUsuario;
  }

  get tipoUsuario() {
    return this._tipoUsuario;
  }

  //setters

  set nomeUsuario(value) {
    this._nomeUsuario = value;
  }

  set emailUsuario(value) {
    this._emailUsuario = value;
  }

  set dataRegistroUsuario(value) {
    this._dataRegistroUsuario = value;
  }

  set tipoUsuario(value) {
    this._tipoUsuario = value;
  }
}
