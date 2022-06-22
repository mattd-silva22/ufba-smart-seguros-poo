export class User {
    constructor(nome,genero,email,dataRegistro,tipo){
        this._nomeUsuario = nome
        this._generoUsuario = genero
        this._emailUsuario = email
        this._dataRegistroUsuario = dataRegistro
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

    
    get emailUsuario(){
        return this._emailUsuario
    }

    get dataRegistroUsuario(){
        return this._dataRegistroUsuario
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


    set emailUsuario(value) {
        this._emailUsuario= value
    }
 
    set dataRegistroUsuario(value) {
        this._dataRegistroUsuario = value
    }

    set tipoUsuario(value) {
        this._tipoUsuario = value
    }

    
  

}