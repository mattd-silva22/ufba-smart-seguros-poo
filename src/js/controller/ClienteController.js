 class ClienteController {
    constructor(clientFormId,clientNameInputId,clientEmailInputId,
                clientCpfInputId,clientGenderId,clientTelInputId
                ){
        this.clientFormEl = document.querySelector(clientFormId)
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

            let nameInput = this.clientNameInputEl.value
            let emailInput = this.clientEmailInputEl.value
            let cpfInput = this.clientCpfInputEl.value
            let telInput = this.clientTelInputEl.value
            let genderInput = ""

            if( nameInput.trim() === "" ||  
                emailInput.trim() === "" || 
                telInput.trim() === "" ||
                cpfInput.trim() === ""
                ){
                alert("Favor,não deixar campos em branco")
                return
            }

            if(cpf.trim() === "s" ) {
                alert("CPF invalido")
                return
            }

            if(cpf.trim() === "t" ) {
                alert("Telefone invalido")
                return
            }

            if(email.trim() === "t" ) {
                alert("Email invalido")
                return
            }
            
            let clientData = {
                name: this.clientNameInputEl.value,
                email : this.clientEmailInputEl.value,
                cpf : this.clientCpfInputEl.value,
                tel : this.clientTelInputEl.value,
                gender : genderInput,
                dataRegistro : "21/09/2022",
                userType : "client"

            }

          

            console.log(clientData)

            this.clearForm()
        })
    }

    clearForm() {
        this.clientNameInputEl.value = ""
        this.clientEmailInputEl.value = ""
        this.clientCpfInputEl.value = ""
        this.clientTelInputEl.value = ""
    }
}