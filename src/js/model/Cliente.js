class Cliente extends User {
  /*
   * @param {string} name
   * @param {string} email
   * @param {string} dataRegistro
   * @param {string} tipo
   * @param {string} cpf
   * @param {string} telefone
   * @returns {Cliente} - Instância do cliente
   */
  constructor(nome, email, dataRegistro, tipo, cpf, telefone) {
    super(nome, email, dataRegistro, tipo);
    this._cpf = cpf;
    this.telefone = telefone;
  }

  /*
   * @returns {string} - Retorna o nome do cliente
   */

  get nome() {
    return this._nome;
  }

  /*
   * @returns {string} - Retorna o email do cliente
   */

  get email() {
    return this._email;
  }

  /*
   * @returns {string} - Retorna a data de registro do cliente
   */

  get dataRegistro() {
    return this._dataRegistro;
  }

  /*
   * @returns {string} - Retorna o tipo do cliente
   */

  get tipo() {
    return this._tipo;
  }

  /*
   * @returns {string} - Retorna o cpf do cliente
   */

  get cpf() {
    return this._cpf;
  }

  /*
   * @returns {string} - Retorna o telefone do cliente
   */

  get telefone() {
    return this._telefone;
  }

  /*
   * @param {string} nome
   */

  set nome(value) {
    this._nome = value;
  }

  /*
   * @param {string} nome
   */

  set email(value) {
    this._email = value;
  }

  /*
   * @param {string} dataRegistro
   */

  set dataRegistro(value) {
    this._dataRegistro = value;
  }

  /*
   * @param {string} tipo
   */

  set tipo(value) {
    this._tipo = value;
  }

  /*
   * @param {string} cpf
   */

  set cpf(value) {
    this._cpf = value;
  }

  /*
   * @param {string} telefone
   */

  set telefone(value) {
    this._telefone = value;
  }
}
