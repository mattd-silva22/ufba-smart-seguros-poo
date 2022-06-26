const aside = document.querySelector("aside");
const mainSection = document.querySelector("#main-section");
const checkboxMenu = document.querySelector("#checkbox-menu");
const menuMobie = document.querySelector("#menu-mobile");
const listsContainer = document.querySelector("#lists-container");
const formArea = document.querySelector("#form-area");
const formSelector = document.querySelector("#form-type-selector");


const clientFormEl = document.querySelector("#client-form")
const salesFormEl = document.querySelector("#sales-form")


const formLabels = [
  "Vendedores",
  "Clientes",
  "Seguro de imóvel",
  "Seguro de veículo",
  "Seguro de celular",
];





const formLafddfbels = [
  "Vendedores",
  "Clientes",
  "Seguro de imóvel",
  "Seguro de veículo",
  "Seguro de celular",
];

function handleChangeFormEvent(label) {
  if(label === "Vendedores") {
    salesFormEl.classList.toggle("form-disable")
    clientFormEl.classList.toggle("form-disable")
  }

  if( label === "Clientes") {
    clientFormEl.classList.toggle("form-disable")
    salesFormEl.classList.toggle("form-disable")
  }

  if( label === "Seguro de imóvel") {
    
  }
  
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



checkboxMenu.addEventListener("change", () => {
  menuMobie.classList.toggle("inactive");
});

populateAside();



gt
console.log("foi");
