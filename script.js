const aside = document.querySelector("aside");
const checkboxMenu = document.querySelector("#checkbox-menu");
const menuMobie = document.querySelector("#menu-mobile");
const formLabels = [
  "Vendedores",
  "Clientes",
  "Seguro de imóvel",
  "Seguro de veículo",
  "Seguro de celular",
];

function populateAside() {
  formLabels.forEach((label) => {
    aside.innerHTML += `
        <div class="aside-label-container">
            <p>${label}</p>
        </div>
      `;
  });
}

checkboxMenu.addEventListener("change", () => {
  menuMobie.classList.toggle("inactive");
});

populateAside();
