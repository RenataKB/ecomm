import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      minLength: [3, 'Nome precisa ter no mínimo 3 caracteres'],
      match: /^[A-Za-zÀ-ÖØ-öø-ÿ]{3}.*$/,
      required: [true, 'Nome da categoria é obrigatório'],
    },
    status: {
      type: String,
      enum: { values: ['ATIVA', 'INATIVA'], message: '{VALUE} não é um status válido' },
      default: 'ATIVA',
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

const Categories = mongoose.model('categories', categorySchema);

export default Categories;
