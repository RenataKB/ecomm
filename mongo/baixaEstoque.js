use("ecomm");

const quantidadePedido = 2;
const nomeProduto = "Galaxy Tab S8";

const customer = db.accounts.findOne(
    {"cpf": "32021260836"},
    {"_id": 1, "nomeUsuario": 1, "endereco": 1}
);

const orderCustomer = db.products.findOne(
    {"NOME": nomeProduto},
    {"_id": 1, "PREÇO UNITÁRIO": 1}
);

const newOrder = db.orders.insertMany([
    {
        "dataPedido": new Date(),
        "account": {
            "accountId": customer._id,
            "nomeCliente": customer.nomeUsuario
        },
        "enderecoEntrega": customer.endereco,
        "listaItens": [{
            "productId": orderCustomer._id,
            "quantidade": quantidadePedido,
            "desconto": null,
            "precoUnitario": orderCustomer["PREÇO UNITÁRIO"]
        }]
    }
]);

const updateStorage = db.products.updateOne(
    {_id: orderCustomer._id, "QUANTIDADE EM ESTOQUE": {$gte: quantidadePedido}},
    {
        $inc: {"QUANTIDADE EM ESTOQUE": -quantidadePedido}
    }
);

console.log(updateStorage);
