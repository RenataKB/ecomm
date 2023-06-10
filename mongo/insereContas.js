use("ecomm");

// Dados gerados em: https://www.4devs.com.br/gerador_de_pessoas
const accounts = db.accounts.insertMany([
    {
        "nomeUsuario": "Aline Carolina Lúcia Pereira",
        "email": "aline_carolina_pereira@hellokitty.com",
        "senha": "NiZL3LLHmm",
        "dataCriacao": new Date(),
        "cpf": "32021260836",
        "telefone": "1127197418",
        "endereco": {
            bairro: "Cidade Tiradentes",
            rua: "Rua Augusto Marreiros",
            numero: "187",
            complemento: null,
            cep: "08471340",
            cidade: "São Paulo",
            uf: "SP"
        }
    },
    {
        "nomeUsuario": "Rosângela Sandra Marcela Ribeiro",
        "email": "rosangelasandraribeiro@truckeixo.com.br",
        "senha": "H7edqL8ibD",
        "dataCriacao": new Date(),
        "cpf": "17756570863",
        "telefone": "1126574285",
        "endereco": {
            bairro: "Vila Sofia",
            rua: "Rua Frei Canísio",
            numero: "100",
            complemento: "",
            cep: "04671240",
            cidade: "São Paulo",
            uf: "SP"
        }
    },
    {
        "nomeUsuario": "Carolina Julia Rayssa Porto",
        "email": "carolina_porto@dc4.com.br",
        "senha": "DPDgzwdQzj",
        "dataCriacao": new Date(),
        "cpf": "30765012839",
        "telefone": "11984375533",
        "endereco": {
            bairro: "Praia Azul",
            rua: "Rua Rauma",
            numero: "170",
            complemento: "ap 101",
            cep: "04928150",
            cidade: "São Paulo",
            uf: "SP"
        }
    }
]);

console.log(accounts);
