let database = new Db()
let formView = new FormView()
let listController = new ListController()
let clienteController = new ClienteController("#client-form","#client-name","#client-email",
                                                "#client-cpf","#gender","#tel-input",database,listController);

let vendedorController = 1

