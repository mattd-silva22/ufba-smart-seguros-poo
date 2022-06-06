export class ClienteController {
    constructor(cleintFormId,clientNameInputId,clientEmailInputId,
                clientCpfInputId,clientGenderId,clientTelInputId
                ){
        this.clientFormEl = document.querySelector(cleintFormId)
        this.clientNameInputEl =  document.querySelector(clientNameInputId)
        this.clientEmailInputEl = document.querySelector(clientEmailInputId)
        this.clientCpfInputEl = document.querySelector(clientCpfInputId)
        this.clientGenderInputEl = document.querySelector(clientGenderId)
        this.clientTelInputEl = document.querySelector(clientTelInputId)
        
        this.onSubmit()
    }

    onSubmit() {
        this.clientFormEl.addEventListener("submit", e =>{
            e.preventDefault()

            let teste = {
                name: this.clientNameInputEl.value,
                email : this.clientEmailInputEl.value,
                cpf : this.clientCpfInputEl.value,
                tel : this.clientTelInputEl.value

            }

            console.log(teste)
        })
    }
}