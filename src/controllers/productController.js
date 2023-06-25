import Products from '../models/Product.js';
import Categories from '../models/Category.js';

class ProductController {
  static listarProdutos = async (req, res) => {
    try {
      const produtos = await Products.find().populate('CATEGORIA');
      if (produtos.length === 0) {
        throw new Error('Não encontrado');
      }
      res.status(200).json(produtos);
    } catch (err) {
      if (err.message === 'Não encontrado') {
        res.status(404).send(err.message);
      } else {
        res.status(500).json({ error: 'Ocorreu um erro ao buscar a lista de produtos' });
      }
    }
  };

  static listarProdutoPorId = async (req, res) => {
    const id = req.params.id;
    try {
      const produto = await Products.findById(id).populate('CATEGORIA', 'nome');
      if (!produto) {
        throw new Error('Não encontrado');
      }
      res.status(200).send(produto);
    } catch (err) {
      res.status(404).send('Não encontrado');
    }
  };

  static cadastrarProduto = async (req, res) => {
    try {
      const produto = new Products(req.body);
      const categoria = await Categories.findById(produto.CATEGORIA);
      if (!categoria) {
        throw new Error('ID da Categoria inválido');
      } else {
        await produto.save();
        res.status(201).send(produto.toJSON());
      }
    } catch (err) {
      res.status(400).send({ message: `Falha ao cadastrar produto - ${err.message}` });
    }
  };

  static atualizarProduto = async (req, res) => {
    const id = req.params.id;
    try {
      const produto = await Products.findByIdAndUpdate(
        id,
        { $set: req.body },
        { runValidators: true },
      );
      if (!produto) {
        throw new Error('Não encontrado');
      }
      const novaCategoria = req.body.CATEGORIA;
      if (novaCategoria) {
        const existeCategoria = await Categories.findById(novaCategoria);
        if (!existeCategoria) {
          throw new Error('ID da Categoria inválido');
        }
      }
      res.status(200).send({ message: 'Produto atualizado com sucesso!' });
    } catch (err) {
      if (err.message === 'Não encontrado') {
        res.status(404).send(err.message);
      } else {
        res.status(400).send({ message: `Falha ao atualizar produto - ${err.message}` });
      }
    }
  };

  static excluirProduto = async (req, res) => {
    const id = req.params.id;
    try {
      const produto = await Products.findByIdAndDelete(id);
      if (!produto) {
        throw new Error('Não encontrado');
      }
      res.status(200).send({ message: 'Produto removido com sucesso!' });
    } catch (err) {
      res.status(404).send('Não encontrado');
    }
  };
}

export default ProductController;
