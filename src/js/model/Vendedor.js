export class Vendedor extends User{
    constructor(nome,genero,email,dataRegistro,tipo,codVendedor,telefone){
        super(nome,genero,email,dataRegistro,tipo)
        this.codigoVendedor = codVendedor
        this.telefone = telefone
    }
}