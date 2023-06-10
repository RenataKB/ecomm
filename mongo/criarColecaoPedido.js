use("ecomm");

const createOrders = db.createCollection("orders",
    {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                "additionalProperties": false,
                required: ["_id", "dataPedido", "account", "enderecoEntrega", "listaItens"],
                properties: {
                    _id: {
                        bsonType: "objectId"
                    },
                    dataPedido: {
                        bsonType: "date",
                        description: "Data Pedido precisa ser uma data válida."
                    },
                    account: {
                        bsonType: "object",
                        "additionalProperties": false,
                        required: ["accountId", "nomeCliente"],
                        properties: {
                            accountId: {
                                bsonType: "objectId"
                            },
                            nomeCliente: {
                                bsonType: "string"
                            }
                        }
                    },
                    enderecoEntrega: {
                        bsonType: "object",
                        "additionalProperties": false,
                        required: ["bairro", "rua", "numero", "complemento", "cep", "cidade", "uf"],
                        properties: {
                            bairro: {
                                bsonType: "string",
                                minLength: 1,
                                description: "Bairro precisa ter no mínimo 1 caracter."
                            },
                            rua: {
                                bsonType: "string",
                                minLength: 1,
                                description: "Rua precisa ter no mínimo 1 caracter."
                            },
                            numero: {
                                bsonType: "string",
                                minLength: 1,
                                description: "Numero precisa ter no mínimo 1 caracter."
                            },
                            complemento: {
                                bsonType: ["string", "null"]
                            },
                            cep: {
                                bsonType: "string",
                                minLength: 8,
                                maxLength: 8,
                                description: "CEP precisa ter 8 caracteres."
                            },
                            cidade: {
                                bsonType: "string",
                                minLength: 5,
                                description: "Cidade precisa ter no mínimo 5 caracteres."
                            },
                            uf: {
                                bsonType: "string",
                                minLength: 2,
                                maxLength: 2,
                                description: "UF precisa ter 2 caracteres."
                            }
                        }
                    },
                    listaItens: {
                        bsonType: "array",
                        minItems: 1,
                        additionalProperties: false,
                        items: {
                            bsonType: "object",
                            required: ["productId", "quantidade", "desconto", "precoUnitario"],
                            additionalProperties: false,
                            description: "Lista itens precisa ter os itens especificados.",
                            properties: {
                                productId: {
                                    bsonType: "objectId"
                                },
                                quantidade: {
                                    bsonType: "int",
                                    minimum: 1,
                                    description: "Quantidade precisa ser um inteiro e no mínimo 1."
                                },
                                // Desconto informado como valor em reais, não porcentagem
                                desconto: {
                                    bsonType: ["decimal", "null"],
                                    minimum: 0,
                                    exclusiveMinimum: true,
                                    description: "Se informado, desconto precisa ser maior que 0."
                                },
                                precoUnitario: {
                                    bsonType: "decimal",
                                    minimum: 0,
                                    exclusiveMinimum: true,
                                    description: "Preco unitario precisa ser maior que 0."
                                },
                            }
                        }
                    }
                }
            }
        }
    }
);

console.log(createOrders);
