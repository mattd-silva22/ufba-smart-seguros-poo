class ContratoSeguro {
  constructor(id, nomeCliente, nomeVendedor, codVendedor, item, valorContrato) {
    this.id = id;
    this._nomeCliente = nomeCliente;
    this._nomeVendedor = nomeVendedor;
    this._codVendedor = codVendedor;
    this._item = item;
    this._valorContrato = valorContrato;
    this._dataContrato = getTodayDate();
  }

  //getters
  get id() {
    return this._id;
  }

  get nomeCliente() {
    return this._nomeCliente;
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

  get dataContrato() {
    return this._dataContrato;
  }

  //setters
  set id(value) {
    this._id = value;
  }

  set nomeCliente(value) {
    this._nomeCliente = value;
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

function getTodayDate() {
  const date = new Date();
  const today =
    date.getDate() +
    "/" +
    (date.getMonth() + 1 > 9
      ? date.getMonth() + 1
      : "0" + (date.getMonth() + 1)) +
    "/" +
    date.getFullYear();
  return today;
}
