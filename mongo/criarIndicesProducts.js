use("ecomm");

const indexName = db.products.createIndex({"NOME": 1});
const indexCategory = db.products.createIndex({"CATEGORIA": 1});

console.log(indexName);
console.log(indexCategory);