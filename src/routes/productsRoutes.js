import express from 'express';
import ProductController from '../controllers/productController.js';

const router = express.Router();

router
  .get('/products', ProductController.listarProdutos)
  .get('/products/:id', ProductController.listarProdutoPorId)
  .post('/products', ProductController.cadastrarProduto)
  .put('/products/:id', ProductController.atualizarProduto)
  .delete('/products/:id', ProductController.excluirProduto);

export default router;
