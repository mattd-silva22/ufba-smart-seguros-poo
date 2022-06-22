export class VendedorController {
  constructor(
    vendedorFormId,
    vendedorName,
    vendedorEmail,
    codigoVendedor,
    vendedorGenderId,
    vendedorTelefone
  ) {
    this.vendedorFormEl = document.querySelector(vendedorFormId);
    this.vendedorNameInputEl = document.querySelector(vendedorName);
    this.vendedorEmailInputEl = document.querySelector(vendedorEmail);
    this.codigoVendedorInputEl = document.querySelector(codigoVendedor);
    this.vendedorGenderInputEl = document.querySelector(vendedorGenderId);
    this.vendedorTelInputEl = document.querySelector(vendedorTelefone);

    this.onSubmit();
  }

  onSubmit() {
    this.vendedorFormEl.addEventListener("submit", (e) => {
      e.preventDefault();

      let nameInput = this.vendedorNameInputEl.value;
      let emailInput = this.vendedorEmailInputEl.value;
      let codigoInput = this.codigoVendedorInputEl.value;
      let telInput = this.vendedorlInputEl.value;
      let genderInput = "";

      if (
        nameInput.trim() === "" ||
        emailInput.trim() === "" ||
        telInput.trim() === "" ||
        codigoInput.trim() === ""
      ) {
        alert("Favor,não deixar campos em branco");
        return;
      }

      if (codigo.trim() === "s") {
        alert("CPF invalido");
        return;
      }

      if (codigo.trim() === "t") {
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
        userType: "vendedor",
      };

      console.log(vendedorData);

      this.clearForm();
    });
  }

  clearForm() {
    this.vendedorNameInputEl.value = "";
    this.vendedorEmailInputEl.value = "";
    this.codigoVendedorInputEl.value = "";
    this.codigoTelInputEl.value = "";
  }
}
