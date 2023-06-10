use("ecomm");
const categorieSchema = require("./categorie.schema.json");

const createCategoriesValidation = db.runCommand({collMod: "categories",
    validator: categorieSchema
});

console.log(createCategoriesValidation);
