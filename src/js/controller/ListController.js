class ListController {

    constructor(){
        this.ClientListEl = document.querySelector(".lista-cliente")
    }

    addClient(client){
        let divEl = document.createElement("div")
        divEl.classList.add("list-table-row")
        divEl.innerHTML = `
            <p><img src="./assets/Group 6.svg" alt="user photo" /></p>
            <p>${client.nomeUsuario}</p>
            <p>fulano@smart.com.br</p>
            <p>(71) 99999-0000</p>
            <p class="list-actions">
            <button class="edit-button">Editar</button>
            <button>Excluir</button>
            </p>
        `

        this.ClientListEl.appendChild(divEl)
    }
}