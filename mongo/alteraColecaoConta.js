use("ecomm");

const modifyAccountsValidation = db.runCommand({collMod: "accounts",
    validator: {
        $jsonSchema: {
          bsonType: 'object',
          additionalProperties: false,
          required: [
            '_id',
            'nomeUsuario',
            'email',
            'senha',
            'dataCriacao',
            'cpf',
            'telefone',
            'endereco'
          ],
          properties: {
            _id: {
              bsonType: 'objectId'
            },
            nomeUsuario: {
              bsonType: 'string',
              minLength: 5,
              description: 'Nome usuario precisa ter no mínimo 5 caracteres.'
            },
            email: {
              bsonType: 'string',
              minLength: 5,
              pattern: "^\\w+([\\.-]?\\w+)@\\w+([\\.-]?\\w+)(\\.\\w{2,3})+$",
              description: 'Email precisa ter no mínimo 5 caracteres.'
            },
            senha: {
              bsonType: 'string',
              minLength: 5,
              description: 'Senha precisa ter no mínimo 5 caracteres.'
            },
            dataCriacao: {
              bsonType: 'date',
              description: 'Data criacao precisa ser uma data válida.'
            },
            cpf: {
              bsonType: 'string',
              minLength: 11,
              maxLength: 11,
              pattern: "^\\d{11}$",
              description: 'CPF precisa ter 11 caracteres.'
            },
            telefone: {
              bsonType: 'string',
              minLength: 10,
              pattern: "^[0-9]{10,}$",
              description: 'Telefone precisa ter no mínimo 10 caracteres.'
            },
            endereco: {
              bsonType: 'object',
              additionalProperties: false,
              required: [
                'bairro',
                'rua',
                'numero',
                'complemento',
                'cep',
                'cidade',
                'uf'
              ],
              properties: {
                bairro: {
                  bsonType: 'string',
                  minLength: 1,
                  description: 'Bairro precisa ter no mínimo 1 caracter.'
                },
                rua: {
                  bsonType: 'string',
                  minLength: 1,
                  description: 'Rua precisa ter no mínimo 1 caracter.'
                },
                numero: {
                  bsonType: 'string',
                  minLength: 1,
                  pattern: "^(\\d+|S/N)$",
                  description: 'Numero precisa ter no mínimo 1 caracter.'
                },
                complemento: {
                  bsonType: [
                    'string',
                    'null'
                  ]
                },
                cep: {
                  bsonType: 'string',
                  minLength: 8,
                  maxLength: 8,
                  pattern: "^[0-9]{8}$",
                  description: 'CEP precisa ter 8 caracteres.'
                },
                cidade: {
                  bsonType: 'string',
                  minLength: 5,
                  description: 'Cidade precisa ter no mínimo 5 caracteres.'
                },
                uf: {
                  bsonType: 'string',
                  minLength: 2,
                  maxLength: 2,
                  pattern: "^(\\s*(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)?)$",
                  description: 'UF precisa ter 2 caracteres.'
                }
              }
            }
          }
        }
      }
});

console.log(modifyAccountsValidation);