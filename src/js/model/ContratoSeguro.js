class ContratoSeguro {
  constructor(
    nomeCliente,
    cpfCliente,
    nomeVendedor,
    codVendedor,
    item,
    valorContrato
  ) {
    this._nomeCliente = nomeCliente;
    this._cpfCliente = cpfCliente;
    this._nomeVendedor = nomeVendedor;
    this._codVendedor = codVendedor;
    this._item = item;
    this._valorContrato = valorContrato;
  }

  //getters
  get nomeCliente() {
    return this._nomeCliente;
  }

  get cpfCliente() {
    return this._cpfCliente;
  }

  get nomeVendedor() {
    return this._nomeVendedor;
  }

  get codVendedor() {
    return this._codVendedor;
  }

  get item() {
    return this._item;
  }

  get valorContrato() {
    return this._valorContrato;
  }

  //setters
  set nomeCliente(value) {
    this._nomeCliente = value;
  }

  set cpfCliente(value) {
    this._cpfCliente = value;
  }

  set nomeVendedor(value) {
    this._nomeVendedor = value;
  }

  set codVendedor(value) {
    this._codVendedor = value;
  }

  set item(value) {
    this._item = value;
  }

  set valorContrato(value) {
    this._valorContrato = value;
  }
}
