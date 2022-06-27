let database = new Db();
let formView = new FormView();
let listController = new ListController(database);
let clienteController = new ClienteController(
  "#client-form",
  "#client-name",
  "#client-email",
  "#client-cpf",
  "#gender",
  "#tel-input",
  database,
  listController
);

let vendedorController = new VendedorController(
  "#sales-form",
  "#vendedorName",
  "#vendedorEmail",
  "#codigoVendedor",
  "#gender",
  "#vendedorTelefone",
  database,
  listController
);

let contratoController = new ContratoCelularController(
  "#contrato-form",
  "#vendedor-sale",
  "#cliente-sale",
  "#valor-sale",
  "#total-sale",
  database,
  listController
);
