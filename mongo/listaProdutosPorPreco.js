use("ecomm");
const productsByPrice = db.products.find({"PREÇO UNITÁRIO": {$gte: 1000, $lte: 2000}}, {"NOME": 1, "PREÇO UNITÁRIO": 1});
console.log(productsByPrice);