const mainURL = 'http://localhost:3000/categories';

export default class CategoryService {
  static async findCategories() {
    try {
      const response = await fetch(mainURL);
      console.log('response status:', response.status);
      return response.json();
    } catch (err) {
      return `Link não encontrado. Erro: ${err}`;
    }
  }

  static async findCategoryById(id) {
    try {
      const response = await fetch(`${mainURL}/${id}`);
      console.log('response status:', response.status);
      if (response.status === 404) {
        return 'Categoria não encontrada';
      }
      return response.json();
    } catch (err) {
      return `Link não encontrado. Erro: ${err}`;
    }
  }

  static async createCategory(category) {
    try {
      const response = await fetch(mainURL, {
        method: 'POST',
        body: category,
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('response status:', response.status);
      return response.json();
    } catch (err) {
      return `Link não encontrado. Erro: ${err}`;
    }
  }

  static async updateCategory(id, category) {
    try {
      const response = await fetch(`${mainURL}/${id}`, {
        method: 'PUT',
        body: category,
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('response status:', response.status);
      if (response.status === 404) {
        return 'Categoria não encontrada';
      }
      return response.json();
    } catch (err) {
      return `Link não encontrado. Erro: ${err}`;
    }
  }

  static async deleteCategory(id) {
    try {
      const response = await fetch(`${mainURL}/${id}`, {
        method: 'DELETE',
      });
      console.log('response status:', response.status);
      if (response.status === 404) {
        return 'Categoria não encontrada';
      }
      return response.json();
    } catch (err) {
      return `Link não encontrado. Erro: ${err}`;
    }
  }
}
