 class FormView {

  constructor(){

    this.aside = document.querySelector("aside");
    this.checkboxMenu = document.querySelector("#checkbox-menu");
    this.menuMobie = document.querySelector("#menu-mobile");
    this.listsContainer = document.querySelector("#lists-container");
    this.formArea = document.querySelector("#form-area");
    this.formSelector = document.querySelector("#form-type-selector");


    this.clientFormEl = document.querySelector("#client-form")
    this.salesFormEl = document.querySelector("#sales-form")
    this.imovelFormEl = document.querySelector("#imovel-form")
    this.veiculoFormEl = document.querySelector("#veiculo-form")
    this.celularFormEl = document.querySelector("#celular-form")


    this.formLabels = [
      "Vendedores",
      "Clientes",
      "Seguro de imóvel",
      "Seguro de veículo",
      "Seguro de celular",
    ];

    this.populateAside()
  }

  handleChangeFormEvent(label) {
    if(label === "Vendedores") {
      this.salesFormEl.classList.remove("form-disable")
      this.clientFormEl.classList.add("form-disable")
      this.veiculoFormEl.classList.add("form-disable")
      this.celularFormEl.classList.add("form-disable")
      this.imovelFormEl.classList.add("form-disable")
    }
  
    if( label === "Clientes") {
      this.clientFormEl.classList.remove("form-disable")
      this.salesFormEl.classList.add("form-disable")
      this.veiculoFormEl.classList.add("form-disable")
      this.celularFormEl.classList.add("form-disable")
      this.imovelFormEl.classList.add("form-disable")
    }
  
    if( label === "Seguro de imóvel") {
      this.imovelFormEl.classList.remove("form-disable")
      this.salesFormEl.classList.add("form-disable")
      this.clientFormEl.classList.add("form-disable")
      this.veiculoFormEl.classList.add("form-disable")
      this.celularFormEl.classList.add("form-disable")
      
    }

    if( label === "Seguro de veículo") {
      this.imovelFormEl.classList.add("form-disable")
      this.salesFormEl.classList.add("form-disable")
      this.clientFormEl.classList.add("form-disable")
      this.veiculoFormEl.classList.remove("form-disable")
      this.celularFormEl.classList.add("form-disable")
    }

    if(label === "Seguro de celular") {
      this.imovelFormEl.classList.add("form-disable")
      this.salesFormEl.classList.add("form-disable")
      this.clientFormEl.classList.add("form-disable")
      this.veiculoFormEl.classList.add("form-disable")
      this.celularFormEl.classList.remove("form-disable")
    }
    
  }

  populateAside() {
    this.formLabels.forEach((label) => {
      const asideLabel = document.createElement("div");
      asideLabel.classList.add("aside-label-container");
      asideLabel.addEventListener("click", () => this.handleChangeFormEvent(label));
      asideLabel.innerHTML += `<p>${label}</p>`;
      this.formSelector.appendChild(asideLabel);
    });
  }


}