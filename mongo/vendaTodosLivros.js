use("ecomm");
const soldOutBook = db.products.updateMany({"CATEGORIA": "LIVROS"}, {$set: {"QUANTIDADE EM ESTOQUE": 0}});
console.log(soldOutBook);