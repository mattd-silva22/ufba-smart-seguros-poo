class ListController {
  constructor() {
    this.ClientListEl = document.querySelector(".lista-cliente");
    this.SalerListEl = document.querySelector(".lista-vendedores");
  }

  addClient(client) {
    let divEl = document.createElement("div");
    divEl.classList.add("list-table-row");
    divEl.id = client._cpf + "-div";
    divEl.innerHTML = `
            <p><img src="./assets/Group 6.svg" alt="user photo" /></p>
            <p>${client.nomeUsuario}</p>
            <p>${client.emailUsuario}</p>
            <p>${client.telefone}</p>
            <p class="list-actions">
            <button class="edit-button">Editar</button>
            <button id="${client._cpf + "-delete"}">Excluir</button>
            </p>
        `;

    this.ClientListEl.appendChild(divEl);
  }

  addVendedor = (vendedor) => {
    let divEl = document.createElement("div");
    divEl.classList.add("list-table-row");
    divEl.id = vendedor._codigoVendedor + "-div";
    divEl.innerHTML = `
      <p><img src="./assets/Group 6.svg" alt="user photo" /></p>
      <p>${vendedor.nomeUsuario}</p>
      <p>${vendedor.emailUsuario}</p>
      <p>${vendedor.telefone}</p>
      <p class="list-actions">
      <button class="edit-button">Editar</button>
      <button id="${vendedor._codigoVendedor + "-delete"}">Excluir</button>
      </p>
  `;
    this.SalerListEl.appendChild(divEl);
  };
}
