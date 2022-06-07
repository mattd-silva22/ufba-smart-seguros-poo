class VendedorController {
  constructor(
    vendedorFormId,
    vendedorNameInputId,
    vendedorEmailInputId,
    vendedorCpfInputId,
    vendedorGenderId,
    vendedorTelInputId
  ) {
    this.vendedorFormEl = document.querySelector(vendedorFormId);
    this.vendedorNameInputEl = document.querySelector(vendedorNameInputId);
    this.vendedorEmailInputEl = document.querySelector(vendedorEmailInputId);
    this.vendedorCpfInputEl = document.querySelector(vendedorCpfInputId);
    this.vendedorGenderInputEl = document.querySelector(vendedorGenderId);
    this.vendedorTelInputEl = document.querySelector(vendedorTelInputId);

    this.onSubmit();
  }

  onSubmit() {
    this.vendedorFormEl.addEventListener("submit", (e) => {
      e.preventDefault();

      let nameInput = this.vendedorNameInputEl.value;
      let emailInput = this.vendedorEmailInputEl.value;
      let cpfInput = this.vendedorCpfInputEl.value;
      let telInput = this.vendedorlInputEl.value;
      let genderInput = "";

      if (
        nameInput.trim() === "" ||
        emailInput.trim() === "" ||
        telInput.trim() === "" ||
        cpfInput.trim() === ""
      ) {
        alert("Favor,não deixar campos em branco");
        return;
      }

      if (cpf.trim() === "s") {
        alert("CPF invalido");
        return;
      }

      if (cpf.trim() === "t") {
        alert("Telefone invalido");
        return;
      }

      if (email.trim() === "t") {
        alert("Email invalido");
        return;
      }

      let vendedorData = {
        name: this.vendedorNameInputEl.value,
        email: this.vendedorEmailInputEl.value,
        cpf: this.vendedorCpfInputEl.value,
        tel: this.vendedorTelInputEl.value,
        gender: vendedorInput,
        dataRegistro: "21/09/2022",
        userType: "client",
      };

      console.log(clientData);

      this.clearForm();
    });
  }

  clearForm() {
    this.clientNameInputEl.value = "";
    this.clientEmailInputEl.value = "";
    this.clientCpfInputEl.value = "";
    this.clientTelInputEl.value = "";
  }
}
