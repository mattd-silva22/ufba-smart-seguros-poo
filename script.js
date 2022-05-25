const aside = document.querySelector("aside");
const mainSection = document.querySelector("#main-section");
const checkboxMenu = document.querySelector("#checkbox-menu");
const menuMobie = document.querySelector("#menu-mobile");
const listsContainer = document.querySelector("#lists-container");

const formLabels = [
  "Vendedores",
  "Clientes",
  "Seguro de imóvel",
  "Seguro de veículo",
  "Seguro de celular",
];

const salersForm = `
<form class="form-container">
<p class="title">Cadastro de vendedores</p>
<input type="text" placeholder="Nome" />
<input type="text" placeholder="Email" />
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

<input type="tel" placeholder="Telefone" />
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

function populateAside() {
  formLabels.forEach((label) => {
    aside.innerHTML += `
        <div class="aside-label-container">
            <p>${label}</p>
        </div>
      `;
  });
  aside.innerHTML += salersForm;
}

function populateMain() {
  LISTS.forEach((list) => (listsContainer.innerHTML += list));
}

checkboxMenu.addEventListener("change", () => {
  menuMobie.classList.toggle("inactive");
});

populateAside();
populateMain();
