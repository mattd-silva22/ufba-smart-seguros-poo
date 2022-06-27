class ContratoSeguro {
  /*
   * @param {number} id
   * @param {string} nomeCliente
   * @param {string} nomeVendedor
   * @param {number} codVendedor
   * @param {string} item
   * @param {string} valorContrato
   * @returns {ContratoSeguro} - Instância do contrato
   */
  constructor(id, nomeCliente, nomeVendedor, codVendedor, item, valorContrato) {
    this.id = id;
    this._nomeCliente = nomeCliente;
    this._nomeVendedor = nomeVendedor;
    this._codVendedor = codVendedor;
    this._item = item;
    this._valorContrato = valorContrato;
    this._dataContrato = getTodayDate();
  }

  /*
   * @returns {number} - Retorna o id do contrato
   */
  get id() {
    return this._id;
  }

  /*
   * @returns {string} - Retorna o nome do cliente
   */

  get nomeCliente() {
    return this._nomeCliente;
  }

  /*
   * @returns {string} - Retorna o nome do vendedor
   */

  get nomeVendedor() {
    return this._nomeVendedor;
  }

  /*
   * @returns {number} - Retorna o código do cliente
   */

  get codVendedor() {
    return this._codVendedor;
  }

  /*
   * @returns {string} - Retorna o item do contrato
   */

  get item() {
    return this._item;
  }

  /*
   * @returns {string} - Retorna o valor do contrato
   */

  get valorContrato() {
    return this._valorContrato;
  }

  /*
   * @returns {string} - Retorna a data de registro do contrato
   */

  get dataContrato() {
    return this._dataContrato;
  }

  /*
   * @param {number} id
   */

  set id(value) {
    this._id = value;
  }

  /*
   * @param {string} nome
   */

  set nomeCliente(value) {
    this._nomeCliente = value;
  }

  /*
   * @param {string} nome
   */

  set nomeVendedor(value) {
    this._nomeVendedor = value;
  }

  /*
   * @param {number} codigo
   */

  set codVendedor(value) {
    this._codVendedor = value;
  }

  /*
   * @param {string} item
   */

  set item(value) {
    this._item = value;
  }

  /*
   * @param {number} valor
   */

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
