class Db {
  constructor() {
    this.clientList = [];
    this.vendedorList = [];
    this.salesList = [];
    this.contratoList = []
  }

  addNewSale(sale) {
    let newSale = {
      vendedor: sale.nomeVendedor,
      contrato: 1,
    };

    let newList = this.salesList.concat(newSale);
    this.salesList = newList;

    document.getElementById("total-sales").innerHTML = this.salesList.length;
  }

  removeSale(sale) {
    let newlist = this.salesList.filter((item) => item !== sale);
    this.salesList = newlist;
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

  getSalesListLength() {
    return this.salesList.length;
  }

  addContrato(contrato) {
    let newlist = this.contratoList.concat(contrato);
    this.contratoList = newlist;
  }

  removeContrato(contrato) {
    console.log(this.contratoList)
    let oldList = this.contratoList
    let newlist = oldList.filter( item => item != contrato)
    this.contratoList = newlist;
    console.log(this.contratoList)
 

  }
}
