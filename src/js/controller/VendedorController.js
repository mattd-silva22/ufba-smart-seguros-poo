class VendedorController {
  constructor(
    vendedorFormId,
    vendedorName,
    vendedorEmail,
    codigoVendedor,
    vendedorGenderId,
    vendedorTelefone,
    database,
    listController
  ) {
    this.vendedorFormEl = document.querySelector(vendedorFormId);
    this.vendedorNameInputEl = document.querySelector(vendedorName);
    this.vendedorEmailInputEl = document.querySelector(vendedorEmail);
    this.codigoVendedorInputEl = document.querySelector(codigoVendedor);
    this.vendedorGenderInputEl = document.querySelector(vendedorGenderId);
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
      let genderInput = "";

      if (
        checkBlankFields([
          nameInput,
          emailInput,
          telInput,
          codigoInput,
        ])
      ) {
        alert("Favor,não deixar campos em branco");
        return;
      }

      

      const date = new Date();
      const today =
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

      let vendedorData = {
        name: this.vendedorNameInputEl.value,
        email: this.vendedorEmailInputEl.value,
        codigo: this.codigoVendedorInputEl.value,
        tel: this.vendedorTelInputEl.value,
        gender: "m",
        dataRegistro: today,
        userType: "vendedor",
      };

      let vendedor = new Vendedor(
        vendedorData.name,
        vendedorData.gender,
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
    this.codigoVendedorInputEl.value = "";
    this.vendedorTelInputEl.value = ""
  }
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateTel(tel) {
  return /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/.test(tel);
}

function validateCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf == "") return false;

  if (
    cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999"
  )
    return false;
  add = 0;
  for (i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(cpf.charAt(9))) return false;
  add = 0;
  for (i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(cpf.charAt(10))) return false;
  return true;
}

function checkBlankFields(fields) {
  return fields.some((field) => field.trim() === "");
}
