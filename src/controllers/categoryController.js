import Categories from '../models/Category.js';

class CategoryController {
  static listarCategorias = async (req, res) => {
    try {
      const categorias = await Categories.find();
      if (categorias.length === 0) {
        throw new Error('Não encontrado');
      }
      res.status(200).json(categorias);
    } catch (err) {
      if (err.message === 'Não encontrado') {
        res.status(404).send(err.message);
      } else {
        res.status(500).send({ error: 'Ocorreu um erro ao buscar a lista de categorias' });
      }
    }
  };

  static listarCategoriaPorId = async (req, res) => {
    const id = req.params.id;
    try {
      const categoria = await Categories.findById(id);
      if (!categoria) {
        throw new Error('Não encontrado');
      } else {
        res.status(200).send(categoria);
      }
    } catch (err) {
      res.status(404).send('Não encontrado');
    }
  };

  static cadastrarCategoria = async (req, res) => {
    try {
      const categoria = new Categories(req.body);
      await categoria.save();
      res.status(201).send(categoria.toJSON());
    } catch (err) {
      res.status(400).send({ message: `Falha ao cadastrar categoria - ${err.message}` });
    }
  };

  static atualizarCategoria = async (req, res) => {
    const id = req.params.id;
    try {
      const categoria = await Categories.findByIdAndUpdate(
        id,
        { $set: req.body },
        { runValidators: true },
      );
      if (!categoria) {
        throw new Error('Não encontrado');
      }
      res.status(200).send({ message: 'Categoria atualizada com sucesso!' });
    } catch (err) {
      if (err.message === 'Não encontrado') {
        res.status(404).send(err.message);
      } else {
        res.status(400).send({ message: `Falha ao atualizar categoria - ${err.message}` });
      }
    }
  };

  static ativarCategoria = async (req, res) => {
    const id = req.params.id;
    try {
      const categoria = await Categories.findByIdAndUpdate(id, { $set: { status: 'ATIVA' } }, { runValidators: true });
      if (!categoria) {
        throw new Error('Não encontrado');
      }
      res.status(200).send({ message: 'Categoria ativada com sucesso!' });
    } catch (err) {
      res.status(404).send('Não encontrado');
    }
  };

  static excluirCategoria = async (req, res) => {
    const id = req.params.id;
    try {
      const categoria = await Categories.findByIdAndDelete(id);
      if (!categoria) {
        throw new Error('Não encontrado');
      }
      res.status(200).send({ message: 'Categoria removida com sucesso!' });
    } catch (err) {
      res.status(404).send('Não encontrado');
    }
  };
}

export default CategoryController;
