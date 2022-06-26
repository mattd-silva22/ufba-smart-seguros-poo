class ClienteController {
  constructor(
    clientFormId,
    clientNameInputId,
    clientEmailInputId,
    clientCpfInputId,
    clientGenderId,
    clientTelInputId,
    database,
    listController
  ) {
    this.clientFormEl = document.querySelector(clientFormId);
    this.clientNameInputEl = document.querySelector(clientNameInputId);
    this.clientEmailInputEl = document.querySelector(clientEmailInputId);
    this.clientCpfInputEl = document.querySelector(clientCpfInputId);
    this.clientGenderInputEl = document.querySelector(clientGenderId);
    this.clientTelInputEl = document.querySelector(clientTelInputId);
    this.database = database;
    this.listController = listController;

    this.onSubmit();
  }

  onSubmit() {
    this.clientFormEl.addEventListener("submit", (e) => {
      e.preventDefault();

      let nameInput = this.clientNameInputEl.value;
      let emailInput = this.clientEmailInputEl.value;
      let cpfInput = this.clientCpfInputEl.value;
      let telInput = this.clientTelInputEl.value;
      let genderInput = "";

      /* if (checkBlankFields([nameInput, emailInput, cpfInput, telInput])) {
        alert("Favor,não deixar campos em branco");
        return;
      }

      if (!validateCPF(cpfInput)) {
        alert("CPF invalido");
        return;
      }

      if (!validateTel(telInput)) {
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

      let clientData = {
        name: this.clientNameInputEl.value,
        email: this.clientEmailInputEl.value,
        cpf: this.clientCpfInputEl.value,
        tel: this.clientTelInputEl.value,
        gender: genderInput,
        dataRegistro: today,
        userType: "client",
      };

      let client = new Cliente(
        clientData.name,
        clientData.gender,
        clientData.email,
        clientData.dataRegistro,
        clientData.userType,
        clientData.cpf,
        clientData.tel
      );

      this.addClientToList(client);

      this.clearForm();
    });
  }

  onRemove(client) {
    this.database.removeCliente(client);
  }

  addClientToList(client) {
    this.database.addCliente(client);
    this.listController.addClient(client);
  }

  clearForm() {
    this.clientNameInputEl.value = "";
    this.clientEmailInputEl.value = "";
    this.clientCpfInputEl.value = "";
    this.clientTelInputEl.value = "";
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
