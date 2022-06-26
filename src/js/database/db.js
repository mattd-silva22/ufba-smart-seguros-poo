class Db {

    constructor(){
        this.ClientList = [
            {
                name: "Guto Marcelo",
                email : this.clientEmailInputEl.value,
                cpf : this.clientCpfInputEl.value,
                tel : this.clientTelInputEl.value,
                gender : genderInput,
                dataRegistro : "21/09/2022",
                userType : "client"
            }
        ]
    }

    addCliente(client) {
       let newlist = this.ClientList.concat(client)
       this.ClientList = newlist
       console.log(this.ClientList)
    }

    
    getUsers(){}

    getVendedores(){}

    getClientList(){
        return this.ClientList
    }
}