const aside = document.querySelector("aside");
const mainSection = document.querySelector("#main-section");
const checkboxMenu = document.querySelector("#checkbox-menu");
const menuMobie = document.querySelector("#menu-mobile");
const listsContainer = document.querySelector("#lists-container");
const formArea = document.querySelector("#form-area");
const formSelector = document.querySelector("#form-type-selector");

const formLabels = [
  "Vendedores",
  "Clientes",
  "Seguro de imóvel",
  "Seguro de veículo",
  "Seguro de celular",
];

const salersForm = `
<form class="form-container" id="sales-form">
<p class="title">Cadastro de vendedores</p>
<input type="text" placeholder="Nome"  id="vendedorName"/>
<input type="text" placeholder="Email" id="vendedorEmail" />
<input type="text" placeholder="Codigo Vendedor" id="codigoVendedor" />
<p class="gender">Gênero</p>

<div class="input-radio">
  <input type="radio" id="gender_male" value="gender_male" name="gender" />
  <label for="gender_male">Masculino</label>
</div>

<div class="input-radio">
  <input type="radio" id="gender_female" value="gender_female" name="gender" />
  <label for="gender_female">Feminino</label>
</div>

<div class="input-radio">
  <input type="radio" id="other" value="other" name="gender" />
  <label for="other">Outro</label>
</div>

<input type="tel" placeholder="Telefone" id="vendedorTelefone" />
<button type="submit">Adicionar</button>
</form>
`;

const clientForm = `
<form class="form-container" id="client-form">
<p class="title">Cadastro de Cliente</p>
<input type="text" placeholder="Nome"  id="client-name"/>
<input type="text" placeholder="Email" id="client-email" />
<input type="text" placeholder="CPF" id="client-cpf" />
<p class="gender">Gênero</p>

<div class="input-radio">
  <input type="radio" id="gender_male" value="gender_male" name="gender" />
  <label for="gender_male">Masculino</label>
</div>

<div class="input-radio">
  <input type="radio" id="gender_female" value="gender_female" name="gender" />
  <label for="gender_female">Feminino</label>
</div>

<div class="input-radio">
  <input type="radio" id="other" value="other" name="gender" />
  <label for="other">Outro</label>
</div>

<input type="tel" placeholder="Telefone" id="tel-input"/>

<button type="submit">Adcionar</button>
</form>
`;

const clientList = `
<div class="list with-border">
  <p class="list-title">Lista de Clientes</p>
  <div class="list-table">
    <div class="list-table-header">
      <p></p>
      <p>Nome</p>
      <p>Email</p>
      <p>Telefone</p>
      <p>Ações</p>
    </div>
    <div class="list-table-body" id="list-table-body">
      <div class="list-table-row">
        <p><img src="./assets/Group 6.svg" alt="user photo" /></p>
        <p>Fulano</p>
        <p>fulano@smart.com.br</p>
        <p>(71) 99999-0000</p>
        <p class="list-actions">
          <button class="edit-button">Editar</button>
          <button>Excluir</button>
        </p>
      </div>
    </div>
  </div>
</div>
`;

const salerslist = `
<div class="list with-border">
  <p class="list-title">Lista de Vendedores</p>
  <div class="list-table">
    <div class="list-table-header">
      <p></p>
      <p>Nome</p>
      <p>Email</p>
      <p>Vendas</p>
      <p>Ações</p>
    </div>
    <div class="list-table-body" id="list-table-body">
      <div class="list-table-row">
        <p><img src="./assets/Group 6.svg" alt="user photo" /></p>
        <p>Fulano</p>
        <p>fulano@smart.com.br</p>
        <p>5</p>
        <p class="list-actions">
          <button class="edit-button">Editar</button>
          <button>Excluir</button>
        </p>
      </div>
    </div>
  </div>
</div>
`;

const contratosList = `
  <p class="list-title contract-title">Contratos</p>
  <div class="divider"></div>
  <div class="list">
    <div class="list-table">
      <div class="list-table-header">
        <p>ID</p>
        <p>Cliente</p>
        <p>Vendedor</p>
        <p>Tipo</p>
        <p>Valor</p>
        <p>Data</p>
        <p></p>
      </div>
      <div class="list-table-body" id="list-table-body">
        <div class="list-table-row">
          <p>321</p>
          <p>Fulano</p>
          <p>Vendedor</p>
          <p>Imóvel</p>
          <p>R$456,98</p>
          <p>31/12/2022</p>
          <p class="list-actions">
            <button>Excluir</button>
          </p>
        </div>
      </div>
    </div>
  </div>
`;

const LISTS = [clientList, salerslist, contratosList];
const formLafddfbels = [
  "Vendedores",
  "Clientes",
  "Seguro de imóvel",
  "Seguro de veículo",
  "Seguro de celular",
];
function handleChangeFormEvent(label) {
  function getForm(label) {
    switch (label) {
      case "Vendedores":
        return salersForm;

      case "Clientes":
        return clientForm;

      case "Seguro de imóvel":
        return;

      case "Seguro de veículo":
        return;

      case "Seguro de celular":
        return;
    }
  }

  formArea.innerHTML = getForm(label);
  return;
}

function populateAside() {
  formLabels.forEach((label) => {
    const asideLabel = document.createElement("div");
    asideLabel.classList.add("aside-label-container");
    asideLabel.addEventListener("click", () => handleChangeFormEvent(label));
    asideLabel.innerHTML += `<p>${label}</p>`;
    formSelector.appendChild(asideLabel);
  });
}

function populateMain() {
  LISTS.forEach((list) => (listsContainer.innerHTML += list));
}

checkboxMenu.addEventListener("change", () => {
  menuMobie.classList.toggle("inactive");
});

populateAside();
populateMain();
formArea.innerHTML = clientForm;

let clienteController = new ClienteController(
  "#client-form",
  "#client-name",
  "#client-email",
  "#client-cpf",
  "#zap",
  "#tel-input"
);
console.log("foi");
