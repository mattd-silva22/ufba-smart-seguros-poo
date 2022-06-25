class Cliente extends User {
    constructor(nome,genero,email,dataRegistro,tipo,cpf,telefone){
        super(nome,genero,email,dataRegistro,tipo)
        this._cpf = cpf
        this.telefone = telefone
    }

    setCpf(value) {
        this._cpf = value
    }

    getCpf() {
        return this._cpf
    }

    setTelefone(value) {
        this._telefone = value
    }

    getTelefone() {
        return this._telefone
    }
}