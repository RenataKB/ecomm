use("ecomm");
const productSchema = require("./product.schema.json");

const createProductsValidation = db.runCommand({collMod: "products",
    validator: productSchema
});

console.log(createProductsValidation);
