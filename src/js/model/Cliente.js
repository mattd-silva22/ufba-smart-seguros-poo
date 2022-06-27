class Cliente extends User {
  constructor(nome, genero, email, dataRegistro, tipo, cpf, telefone) {
    super(nome, genero, email, dataRegistro, tipo);
    this._cpf = cpf;
    this.telefone = telefone;
  }

  get nome() {
    return this._nome;
  }

  get genero() {
    return this._genero;
  }

  get email() {
    return this._email;
  }

  get dataRegistro() {
    return this._dataRegistro;
  }

  get tipo() {
    return this._tipo;
  }

  get cpf() {
    return this._cpf;
  }

  get telefone() {
    return this._telefone;
  }

  set nome(value) {
    this._nome = value;
  }

  set genero(value) {
    this._genero = value;
  }

  set email(value) {
    this._email = value;
  }

  set dataRegistro(value) {
    this._dataRegistro = value;
  }

  set tipo(value) {
    this._tipo = value;
  }

  set cpf(value) {
    this._cpf = value;
  }

  set telefone(value) {
    this._telefone = value;
  }
}
