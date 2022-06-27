class ListController {
  constructor() {
    this.ClientListEl = document.querySelector(".lista-cliente");
    this.SalerListEl = document.querySelector(".lista-vendedores");
    this.ContratoListEl = document.querySelector(".lista-contratos");
  }

  addClient(client) {
    let divEl = document.createElement("div");
    divEl.classList.add("list-table-row");
    divEl.id = "div-cliente" + client.cpf;
    divEl.innerHTML = `
            <p><img src="./assets/Group 6.svg" alt="user photo" /></p>
            <p>${client.nomeUsuario}</p>
            <p>${client.emailUsuario}</p>
            <p>${client.telefone}</p>
            <p class="list-actions">
            
            <button id="delete-cliente-${client.cpf}">Excluir</button>
            </p>
        `;

    this.ClientListEl.appendChild(divEl);
    const button = document.querySelector(`#delete-cliente-${client.cpf}`);
    button.addEventListener("click", () => {
      this.removeClient(client);
    });
  }

  addVendedor = (vendedor) => {
    let divEl = document.createElement("div");
    divEl.classList.add("list-table-row");
    divEl.id = "div-vendedor" + vendedor.codigoVendedor;
    divEl.innerHTML = `
      <p><img src="./assets/Group 6.svg" alt="user photo" /></p>
      <p>${vendedor.nomeUsuario}</p>
      <p>${vendedor.emailUsuario}</p>
      <p>${vendedor.telefone}</p>
      <p class="list-actions">
      
      <button id="delete-vendedor-${vendedor.codigoVendedor}">Excluir</button>
      </p>
  `;
    this.SalerListEl.appendChild(divEl);
    const button = document.querySelector(
      `#delete-vendedor-${vendedor.codigoVendedor}`
    );
    button.addEventListener("click", () => {
      this.removeVendedor(vendedor);
    });
  };

  addContrato = (contrato) => {
    let divEl = document.createElement("div");
    divEl.classList.add("list-table-row");
    divEl.id = "div-contrato" + contrato.id;
    divEl.innerHTML = `
    <p>${contrato.id}</p>
    <p>${contrato.nomeCliente}</p>
    <p>${contrato.nomeVendedor}</p>
    <p>${contrato.item}</p>
    <p>R$ ${contrato.valorContrato}</p>
    <p>${contrato.dataContrato}</p>
    <p class="list-actions">
      <button id="delete-contrato-${contrato.id}">Excluir</button>
    </p>
  `;
    this.ContratoListEl.appendChild(divEl);
    const button = document.querySelector(`#delete-contrato-${contrato.id}`);
    button.addEventListener("click", () => {
      this.removeContrato(contrato);
    });
  };

  removeClient = (client) => {
    let divEl = document.getElementById("div-cliente" + client.cpf);
    this.ClientListEl.removeChild(divEl);
  };

  removeVendedor = (vendedor) => {
    let divEl = document.getElementById(
      "div-vendedor" + vendedor.codigoVendedor
    );
    this.SalerListEl.removeChild(divEl);
  };

  removeContrato = (contrato) => {
    let divEl = document.getElementById("div-contrato" + contrato._id);
    this.ContratoListEl.removeChild(divEl);
  };
}
