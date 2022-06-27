class ContratoCelularController {
  constructor(
    salesFormId,
    vendedorName,
    clienteSale,
    valor,
    totalVendas,
    database,
    listController
  ) {
    this.salesFormEl = document.querySelector(salesFormId);
    this.vendedorNameInputEl = document.querySelector(vendedorName);
    this.clienteSaleInputEl = document.querySelector(clienteSale);
    this.valorInputEl = document.querySelector(valor);
    this.totalVendasEl = document.querySelector(totalVendas);
    this.database = database;
    this.listController = listController;

    this.onSubmit();
  }

  onSubmit() {
    this.salesFormEl.addEventListener("submit", (e) => {
      e.preventDefault();

      let vendedorNameInput = this.vendedorNameInputEl.value;
      let clienteSaleInput = this.clienteSaleInputEl.value;
      let tipoInput = this.tipoInputEl;
      let valorInput = this.valorInputEl.value;

      if (
        checkBlankFields([
          vendedorNameInput,
          clienteSaleInput,
          tipoInput,
          valorInput,
        ])
      ) {
        alert("Favor não deixar campos em branco");
        return;
      }

      let contratoData = {
        id: this.database.getSalesListLength() + 1,
        nomeCliente: this.clienteSaleInputEl.value,
        nomeVendedor: this.vendedorNameInputEl.value,
        codVendedor: 1,
        valorContrato: this.valorInputEl.value,
      };

      let contrato = new ContratoSeguro(
        contratoData.id,
        contratoData.nomeCliente,
        contratoData.nomeVendedor,
        contratoData.codVendedor,
        getSelectedType(),
        contratoData.valorContrato
      );

      this.addContratoToList(contrato);

      this.clearForm();
    });
  }

  addContratoToList(contrato) {
    this.database.addNewSale(contrato);
    this.listController.addContrato(contrato);
  }

  clearForm() {
    this.vendedorNameInputEl.value = "";
    this.clienteSaleInputEl.value = "";
    this.valorInputEl.value = "";
  }
}

class ContratoImovel {
  constructor() {}
}

class ContratoVeiculo {
  constructor() {}
}

function checkBlankFields(fields) {
  return fields.some((field) => field.trim() === "");
}

function getSelectedType() {
  return document.querySelector("#veiculo").checked
    ? "Veículo"
    : document.querySelector("#imovel").checked
    ? "Imóvel"
    : "Celular";
}
