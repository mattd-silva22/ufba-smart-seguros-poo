class User {
  /*
   * @param {string} nome
   * @param {string} email
   * @param {string} dataRegistro
   * @param {string} tipo
   * @returns {User} - Retorna um objeto do tipo User
   */
  constructor(nome, email, dataRegistro, tipo) {
    this._nomeUsuario = nome;
    this._emailUsuario = email;
    this._dataRegistroUsuario = dataRegistro;
    this._tipoUsuario = tipo;
  }

  /*
   * @returns {string} - Retorna o nome do usuário
   */
  get nomeUsuario() {
    return this._nomeUsuario;
  }

  /*
   * @returns {string} - Retorna o email do usuário
   */
  get emailUsuario() {
    return this._emailUsuario;
  }

  /*
   * @returns {string} - Retorna a data de registro do usuário
   */

  get dataRegistroUsuario() {
    return this._dataRegistroUsuario;
  }

  /*
   * @returns {string} - Retorna o tipo do usuário
   */

  get tipoUsuario() {
    return this._tipoUsuario;
  }

  /*
   * @param {string} nome
   */

  set nomeUsuario(value) {
    this._nomeUsuario = value;
  }

  /*
   * @param {string} email
   */

  set emailUsuario(value) {
    this._emailUsuario = value;
  }

  /*
   * @param {string} dataRegistro
   */

  set dataRegistroUsuario(value) {
    this._dataRegistroUsuario = value;
  }

  /*
   * @param {string} tipo
   */

  set tipoUsuario(value) {
    this._tipoUsuario = value;
  }
}
