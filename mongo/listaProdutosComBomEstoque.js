use("ecomm");
const goodStorage = db.products.find({"QUANTIDADE EM ESTOQUE": {$gte: 3}}, {"NOME": 1, "QUANTIDADE EM ESTOQUE": 1});
console.log(goodStorage);