import fs from 'fs';
import CategoryService from './CategoryService.js';

const caminho = process.argv;

async function processarComando(argumentos) {
  const argumento = argumentos[2];

  switch (argumento) {
    case '--listarCategorias': {
      const todasCategorias = await CategoryService.findCategories();
      console.log(todasCategorias);
      break;
    }

    case '--recuperarCategoriaPorId': {
      const idCategoria = argumentos[3];
      const categoriaDesejada = await CategoryService.findCategoryById(idCategoria);
      console.log(categoriaDesejada);
      break;
    }

    case '--inserirCategoria': {
      const arquivoCategoriaInserir = argumentos[3];

      try {
        const encoding = 'utf-8';
        const dadosCategoriaInserir = await fs.promises.readFile(arquivoCategoriaInserir, encoding);
        const categoriaInserida = await CategoryService.createCategory(dadosCategoriaInserir);
        console.log(categoriaInserida);
      } catch (erro) {
        if (erro.code === 'ENOENT') {
          console.log('Arquivo não existe ou caminho incorreto');
        } else {
          console.log('Erro ao ler o arquivo');
        }
      }
      break;
    }

    case '--atualizarCategoria': {
      const idCategoriaAtualizar = argumentos[3];
      const arquivoCategoriaAtualizar = argumentos[4];

      try {
        const encoding = 'utf-8';
        const dadosCategoriaAlterar = await fs.promises.readFile(
          arquivoCategoriaAtualizar,
          encoding,
        );
        const categoriaAtualizada = await CategoryService.updateCategory(
          idCategoriaAtualizar,
          dadosCategoriaAlterar,
        );
        console.log(categoriaAtualizada);
      } catch (erro) {
        if (erro.code === 'ENOENT') {
          console.log('Arquivo não existe ou caminho incorreto');
        }
        console.log('Erro ao ler o arquivo');
      }
      break;
    }

    case '--excluirCategoria': {
      const idCategoriaExcluir = argumentos[3];
      const categoriaExcluida = await CategoryService.deleteCategory(idCategoriaExcluir);
      console.log(categoriaExcluida);
      break;
    }

    default:
      console.log('Argumento inválido');
      break;
  }
}

processarComando(caminho);
