use("ecomm");
const productsByCategory = db.products.find({"CATEGORIA": {$in: ["LIVROS", "CELULARES"]}});
console.log(productsByCategory);