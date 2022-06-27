class Vendedor extends User {
  /*
   * @param {string} name
   * @param {string} email
   * @param {string} dataRegistro
   * @param {string} tipo
   * @param {string} codigoVendedor
   * @param {string} telefone
   * @returns {Vendedor} - Instância do vendedor
   */
  constructor(nome, email, dataRegistro, tipo, codVendedor, telefone) {
    super(nome, email, dataRegistro, tipo);
    this._codigoVendedor = codVendedor;
    this._telefone = telefone;
  }

  /*
   * @returns {string} - Retorna o código do vendedor
   */
  get codigoVendedor() {
    return this._codigoVendedor;
  }

  /*
   * @returns {string} - Retorna o telefone do vendedor
   */

  get telefone() {
    return this._telefone;
  }

  /*
   * @param {string} codigoVendedor
   */

  set codigoVendedor(value) {
    this._codigoVendedor = value;
  }

  /*
   * @param {string} telefone
   */

  set telefone(value) {
    this._telefone = value;
  }
}
