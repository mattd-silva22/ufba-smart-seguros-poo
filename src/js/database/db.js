class Db {
  constructor() {
    this.clientList = [];
    this.vendedorList = [];
    this.contratoList = [];
  }

  addCliente(client) {
    let newlist = this.clientList.concat(client);
    this.clientList = newlist;
  }

  removeCliente(client) {
    let newlist = this.clientList.filter((item) => item !== client);
    this.clientList = newlist;
  }

  addVendedor(vendedor) {
    let newlist = this.vendedorList.concat(vendedor);
    this.vendedorList = newlist;
  }

  removeVendedor(vendedor) {
    let newlist = this.vendedorList.filter((item) => item !== vendedor);
    this.vendedorList = newlist;
  }

  getVendedorList() {
    return this.vendedorList;
  }

  getClientList() {
    return this.clientList;
  }

  addContrato(contrato) {
    let newlist = this.contratoList.concat(contrato);
    this.contratoList = newlist;
    document.getElementById("total-sales").innerHTML =
      this.getContratoListLength();
  }

  getContratoListLength() {
    return this.contratoList.length;
  }

  removeContrato(contrato) {
    let oldList = this.contratoList;
    let newlist = oldList.filter((item) => item != contrato);
    this.contratoList = newlist;
    document.getElementById("total-sales").innerHTML =
      this.getContratoListLength();
  }
}
