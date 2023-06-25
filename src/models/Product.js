import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    NOME: {
      type: String,
      minLength: [3, 'Nome precisa ter no mínimo 3 caracteres'],
      match: /^[A-Za-zÀ-ÖØ-öø-ÿ]{3}.*$/,
      required: [true, 'Nome da categoria é obrigatório'],
    },
    DESCRIÇÃO: {
      type: String,
      required: true,
    },
    SLUG: {
      type: String,
      match: [/^[\w-]+$/, 'Slug só pode ter letras, números e hífens'],
      required: true,
    },
    'PREÇO UNITÁRIO': {
      type: mongoose.Decimal128,
      validate: {
        validator(v) {
          return v > 0;
        },
        message: 'Preço deve ser maior que zero',
      },
      required: true,
    },
    'QUANTIDADE EM ESTOQUE': {
      type: Number,
      min: 0,
      max: 10000,
      required: true,
    },
    CATEGORIA: {
      // validação da categoria está no controller
      type: mongoose.Schema.Types.ObjectId,
      ref: 'categories',
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

const Products = mongoose.model('products', productSchema);

export default Products;
