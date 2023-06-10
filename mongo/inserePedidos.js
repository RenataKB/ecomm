use("ecomm");

// find() retorna um cursor, usando findOne() retorna o objeto 
const customer1 = db.accounts.findOne(
    {"cpf": "32021260836"},
    {"_id": 1, "nomeUsuario": 1, "endereco": 1}
);

const orderCustomer1 = db.products.findOne(
    {"SLUG": "iphone-13-pro"},
    {"_id": 1, "PREÇO UNITÁRIO": 1}
);

const customer2 = db.accounts.findOne(
    {"cpf": "17756570863"},
    {"_id": 1, "nomeUsuario": 1, "endereco": 1}
);

const orderCustomer2 = db.products.findOne(
    {"SLUG": "monitor-dell-27"},
    {"_id": 1, "PREÇO UNITÁRIO": 1}
);


const orders = db.orders.insertMany([
    {
        "dataPedido": new Date(),
        "account": {
            "accountId": customer1._id,
            "nomeCliente": customer1.nomeUsuario
        },
        "enderecoEntrega": customer1.endereco,
        "listaItens": [{
            "productId": orderCustomer1._id,
            "quantidade": 1,
            "desconto": null,
            "precoUnitario": orderCustomer1["PREÇO UNITÁRIO"]
        }]
    },
    {
        "dataPedido": new Date(),
        "account": {
            "accountId": customer2._id,
            "nomeCliente": customer2.nomeUsuario
        },
        "enderecoEntrega": customer2.endereco,
        "listaItens": [{
            "productId": orderCustomer2._id,
            "quantidade": 1,
            "desconto": null,
            "precoUnitario": orderCustomer2["PREÇO UNITÁRIO"]
        }]
    }
]);

console.log(orders);
