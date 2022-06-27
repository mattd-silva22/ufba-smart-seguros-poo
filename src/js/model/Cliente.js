class Cliente extends User {
  constructor(nome, email, dataRegistro, tipo, cpf, telefone) {
    super(nome, email, dataRegistro, tipo);
    this._cpf = cpf;
    this.telefone = telefone;
  }

  get nome() {
    return this._nome;
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
