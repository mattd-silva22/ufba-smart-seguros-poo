class VendedorController {
  constructor(
    vendedorFormId,
    vendedorName,
    vendedorEmail,
    codigoVendedor,
    vendedorTelefone,
    database,
    listController
  ) {
    this.vendedorFormEl = document.querySelector(vendedorFormId);
    this.vendedorNameInputEl = document.querySelector(vendedorName);
    this.vendedorEmailInputEl = document.querySelector(vendedorEmail);
    this.codigoVendedorInputEl = document.querySelector(codigoVendedor);
    this.vendedorTelInputEl = document.querySelector(vendedorTelefone);
    this.database = database;
    this.listController = listController;

    this.onSubmit();
  }

  onSubmit() {
    this.vendedorFormEl.addEventListener("submit", (e) => {
      e.preventDefault();

      let nameInput = this.vendedorNameInputEl.value;
      let emailInput = this.vendedorEmailInputEl.value;
      let codigoInput = this.codigoVendedorInputEl.value;
      let telInput = this.vendedorTelInputEl.value;

      if (checkBlankFields([nameInput, emailInput, telInput, codigoInput])) {
        alert("Favor,não deixar campos em branco");
        return;
      }

      /* if (!validateTel(telInput)) {
        alert("Telefone invalido");
        return;
      }

      if (!validateEmail(emailInput)) {
        alert("Email invalido");
        return;
      } */

      const date = new Date();
      const today =
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

      let vendedorData = {
        name: this.vendedorNameInputEl.value,
        email: this.vendedorEmailInputEl.value,
        codigo: this.codigoVendedorInputEl.value,
        tel: this.vendedorTelInputEl.value,
        dataRegistro: today,
        userType: "vendedor",
      };

      let vendedor = new Vendedor(
        vendedorData.name,
        vendedorData.email,
        vendedorData.dataRegistro,
        vendedorData.userType,
        vendedorData.codigo,
        vendedorData.tel
      );

      this.addVendedorToList(vendedor);

      this.clearForm();
    });
  }

  addVendedorToList(client) {
    this.database.addVendedor(client);
    this.listController.addVendedor(client);
  }

  clearForm() {
    this.vendedorNameInputEl.value = "";
    this.vendedorEmailInputEl.value = "";
    this.codigoVendedorInputEl.value = "";
    this.vendedorTelInputEl.value = "";
  }
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateTel(tel) {
  return /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/.test(tel);
}

function checkBlankFields(fields) {
  return fields.some((field) => field.trim() === "");
}
