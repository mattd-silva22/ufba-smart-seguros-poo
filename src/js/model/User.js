class User {
    constructor(nome,genero,dataNacimento,email,dataRegistro,cep,tipo){
        this._nomeUsuario = nome
        this._generoUsuario = genero
        this._dataNacimentoUsuario = dataNacimento
        this._emailUsuario = email
        this._dataRegistroUsuario = dataRegistro
        this._cepUsuario = cep
        this._tipoUsuario = tipo
    }

    #metodos

    //getters
    get nomeUsuario() {
        return this._nomeUsuario
    }

    get generoUsuario() {
        return this._generoUsuario
    }

    get dataNacimentoUsuario(){
        return this._dataNacimentoUsuario
    }
    
    get emailUsuario(){
        return this._emailUsuario
    }

    get dataRegistroUsuario(){
        return this._dataRegistroUsuario
    }

    get cepUsuario() {
        return this._cepUsuario
    }

    get tipoUsuario() {
        return this._tipoUsuario
    }

    //setters

    set nomeUsuario(value) {
        this._nomeUsuario = value
    }

    set generoUsuario(value) {
        this._generoUsuario = value
    }

    set dataNacimentoUsuario(value) {
        this._dataNacimentoUsuario = value
    }

    set emailUsuario(value) {
        this._emailUsuario= value
    }
 
    set dataRegistroUsuario(value) {
        this._dataRegistroUsuario = value
    }

    set cepUsuario(value) {
        this._cepUsuario = value
    }

    set tipoUsuario(value) {
        this._tipoUsuario = value
    }

}