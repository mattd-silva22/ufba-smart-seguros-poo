
class ClienteController{

    constructor(asideId,mainSestionId,checkboxMenuId,
                formAreaId,formSelectorId)
    {
        this._aside = document.querySelector(asideId)
        this._mainSection = document.querySelector(mainSestionId)
        this._checkboxMenu = document.querySelector(checkboxMenuId)
        this._formArea = document.querySelector(formAreaId)
        this._formSelector =  document.querySelector(formSelectorId)

        this.formLabels = [
            "Vendedores",
            "Clientes",
            "Seguro de imóvel",
            "Seguro de veículo",
            "Seguro de celular",
          ];
        
          this.salersForm = `
          <form class="form-container">
          <p class="title">Cadastro de vendedores</p>
          <input type="text" placeholder="Nome"  id="client-name"/>
          <input type="text" placeholder="Email" id="client-email" />
          <input type="text" placeholder="Codigo Vendedor" />
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

          this.clientForm = `
            <form class="form-container">
            <p class="title">Cadastro de Cliente</p>
            <input type="text" placeholder="Nome"  id="client-name"/>
            <input type="text" placeholder="Email" id="client-email" />
            <input type="text" placeholder="Email" id="client-cpf" />
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

        this.clientList = `
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


        this.LISTS = [clientList, salerslist, contratosList];
        const formLafddfbels = [
          "Vendedores",
          "Clientes",
          "Seguro de imóvel",
          "Seguro de veículo",
          "Seguro de celular",
        ];


    }

    handleChangeFormEvent(label) {
        function getForm(label) {
          switch(label){
      
            case "Vendedores":
              return salersForm
      
            case "Clientes":
              return clientForm
      
            case "Seguro de imóvel" :
              return 
      
            case "Seguro de veículo" :
              return 
      
      
            case "Seguro de celular" :
              return 
          }
        }
        
        formArea.innerHTML = getForm(label)
        return 
      }

      populateAside() {
  
        formLabels.forEach((label) => {
          const asideLabel = document.createElement("div")
          asideLabel.classList.add("aside-label-container")
          asideLabel.addEventListener("click", ()=> handleChangeFormEvent(label))
          asideLabel.innerHTML +=  `<p>${label}</p>`
          formSelector.appendChild(asideLabel)
        });
      }

    populateMain() {
            LISTS.forEach((list) => (listsContainer.innerHTML += list));
        }
    
    addEventsToForms(){
        checkboxMenu.addEventListener("change", () => {
            menuMobie.classList.toggle("inactive");
          });
    }
    addEventsToForms()
    populateAside();
    populateMain();
          
}