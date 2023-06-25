import express from 'express';
import CategoryController from '../controllers/categoryController.js';

const router = express.Router();

router
  .get('/categories', CategoryController.listarCategorias)
  .get('/categories/:id', CategoryController.listarCategoriaPorId)
  .post('/categories', CategoryController.cadastrarCategoria)
  .put('/categories/:id', CategoryController.atualizarCategoria)
  .patch('/categories/:id', CategoryController.ativarCategoria)
  .delete('/categories/:id', CategoryController.excluirCategoria);

export default router;
