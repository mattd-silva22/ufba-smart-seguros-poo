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
      this.salesFormEl.classList.toggle("form-disable")
      this.clientFormEl.classList.toggle("form-disable")
    }
  
    if( label === "Clientes") {
      this.clientFormEl.classList.toggle("form-disable")
      this.salesFormEl.classList.toggle("form-disable")
    }
  
    if( label === "Seguro de imóvel") {
      
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