
class formView{

    constructor() {
       this.aside = document.querySelector("aside");
       this.mainSection = document.querySelector("#main-section");
       this.checkboxMenu = document.querySelector("#checkbox-menu");
       this.menuMobie = document.querySelector("#menu-mobile");
       this.listsContainer = document.querySelector("#lists-container");
       this.formArea = document.querySelector("#form-area");
       this.formSelector = document.querySelector("#form-type-selector");

       this.formLabels = [
        "Vendedores",
        "Clientes",
        "Seguro de imóvel",
        "Seguro de veículo",
        "Seguro de celular",
      ];


      this.salersForm = `
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


      this.clientForm = `
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

      this.contratosList = `
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

    this.formList = [salersForm,clientForm]
    this.LISTS = [clientList, salerslist, contratosList];
    this.formLafddfbels = [
      "Vendedores",
      "Clientes",
      "Seguro de imóvel",
      "Seguro de veículo",
      "Seguro de celular",
    ];

    this.populateAside();
    this.populateMain();


    }

    handleChangeFormEvent(label) {
      function getForm(label) {
        switch (label) {
          case "Vendedores":
            return this.salersForm;
    
          case "Clientes":
            return this.clientForm;
    
          case "Seguro de imóvel":
            return;
    
          case "Seguro de veículo":
            return;
    
          case "Seguro de celular":
            return;
        }
      }
    
      this.formArea.innerHTML = getForm(label);
      return;
    }

    populateAside() {
      this.formLabels.forEach((label) => {
        const asideLabel = document.createElement("div");
        asideLabel.classList.add("aside-label-container");
        asideLabel.addEventListener("click", () => handleChangeFormEvent(label));
        asideLabel.innerHTML += `<p>${label}</p>`;
        this.formSelector.appendChild(asideLabel);
      });
    }

    populateMain() {
      this.LISTS.forEach((list) => (this.listsContainer.innerHTML += list));
    }

    addEventCjheckBoxMenu() {
      this.checkboxMenu.addEventListener("change", () => {
        this.menuMobie.classList.toggle("inactive");
      });
    }
    
        
          
}