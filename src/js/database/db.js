class Db {
  constructor() {
    this.clientList = [
      {
        name: "Guto Marcelo",
        email: "guto.marcelo@email.com",
        cpf: "12365498717",
        tel: "d",
        gender: "m",
        dataRegistro: "21/09/2022",
        userType: "client",
      },
    ];
    this.vendedorList = [];

    this.sales = []
  }

  addNewSale(sale){
    let newSale = {
      vendedor : sale.vendedor,
      contrato : this.sales.contrato
    }

    oldSalesList = this.sales
    this.sales = oldSalesList.concat(newSale)
  }

  addCliente(client) {
    let newlist = this.clientList.concat(client);
    this.clientList = newlist;
    console.log(this.clientList);
  }

  removeCliente(client) {
    let newlist = this.clientList.filter((item) => item !== client);
    this.clientList = newlist;
    console.log(this.clientList);
  }

  addVendedor(vendedor) {
    let newlist = this.vendedorList.concat(vendedor);
    this.vendedorList = newlist;
    console.log(this.vendedorList);
  }

  getVendedorList() {
    return this.vendedorList;
  }

  getClientList() {
    return this.clientList;
  }
}
