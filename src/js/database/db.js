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
        this.vendedorList
    }

    addCliente(client) {
       let newlist = this.clientList.concat(client)
       this.clientList = newlist
      
    }

    addVendedor(vendedor) {
        let newlist = this.clientList.concat(vendedor)
        this.vendedorList = newlist
        
    }

    
    getVendedorList(){
        return this.vendedorList
    }

    getClientList(){
        return this.clientList

    }
}