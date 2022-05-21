const aside = document.querySelector("aside");
const mainSection = document.querySelector("#main-section");
const checkboxMenu = document.querySelector("#checkbox-menu");
const menuMobie = document.querySelector("#menu-mobile");
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

<input type="radio" id="gender_male" value="gender_male" />
<label for="gender_male">Masculino</label>

<input type="radio" id="gender_female" value="gender_female" />
<label for="gender_female">Feminino</label>

<input type="radio" id="other" value="other" />
<label for="other">Outro</label>

<input type="tel" placeholder="Telefone" />
</form>
`;

const clientList = `
<div class="list">
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
        <p>(71)99999-0000</p>
        <p class="list-actions">
          <button class="edit-button">Editar</button>
          <button>Excluir</button>
        </p>
      </div>
    </div>
  </div>
</div>
`;

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

checkboxMenu.addEventListener("change", () => {
  menuMobie.classList.toggle("inactive");
});

populateAside();
