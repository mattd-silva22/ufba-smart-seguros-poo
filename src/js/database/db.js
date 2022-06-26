class Db {

    constructor(){
        this.clientList= [
                    {
                        name: "Guto Marcelo",
                        email : "guto.marcelo@email.com",
                        cpf : "12365498717",
                        tel : "d",
                        gender : "m",
                        dataRegistro : "21/09/2022",
                        userType : "client"
                    }
                ]
    }

    addCliente(client) {
       let newlist = this.clientList.concat(client)
       this.clientList = newlist
       console.log(this.clientList)
    }

    addVendedor(vendedor) {

    }

    
    getVendedorList(){
        return this.vendedorList
    }

    getClientList(){
        return this.clientList

    }
}