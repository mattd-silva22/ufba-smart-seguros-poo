class Vendedor extends User {
  constructor(nome, genero, email, dataRegistro, tipo, codVendedor, telefone) {
    super(nome, genero, email, dataRegistro, tipo);
    this._codigoVendedor = codVendedor;
    this._telefone = telefone;
  }

  //getters
  get codigoVendedor() {
    return this._codigoVendedor;
  }

  get telefone() {
    return this._telefone;
  }

  //setters
  set codigoVendedor(value) {
    this._codigoVendedor = value;
  }

  set telefone(value) {
    this._telefone = value;
  }
}
