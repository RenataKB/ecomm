import {
  beforeEach, afterEach, describe, it, test, expect, jest,
} from '@jest/globals';
import request from 'supertest';
import app from '../main.js';

let server;
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

let responseId;
const newCategory = {
  nome: 'CATEGORIA TESTE',
  status: 'ATIVA',
};
const fakeId = '54958602cdf53bd1574754a1';
const invalidId = '1234';
const newFields = [
  ['nome', { nome: 'CATEGORIA ATUALIZADA' }],
  ['status', { status: 'INATIVA' }],
];

describe('GET em /categories', () => {
  it('Deve retornar a lista de categorias', async () => {
    await request(app)
      .get('/categories')
      .expect(200);
  });
});

describe('POST em /categories', () => {
  it('Deve adicionar uma nova categoria', async () => {
    const resposta = await request(app)
      .post('/categories')
      .send(newCategory)
      .expect(201);
    responseId = resposta.body._id;
  });

  it('Não deve adicionar nada ao passar o body vazio', async () => {
    await request(app)
      .post('/categories')
      .send({})
      .expect(400);
  });
});

describe('GET em /categories/id', () => {
  it('Deve retornar a categoria selecionada', async () => {
    await request(app)
      .get(`/categories/${responseId}`)
      .expect(200);
  });

  it('Deve retornar erro com id não existente', async () => {
    await request(app)
      .get(`/categories/${fakeId}`)
      .expect(404);
  });

  it('Deve retornar erro com id em formato inválido', async () => {
    await request(app)
      .get(`/categories/${invalidId}`)
      .expect(404);
  });
});

describe('PUT em /categories/id', () => {
  test.each(newFields)('Deve alterar o campo %s', async (chave, param) => {
    const requisicao = { request };
    const spy = jest.spyOn(requisicao, 'request');
    await requisicao.request(app)
      .put(`/categories/${responseId}`)
      .send(param)
      .expect(200);

    expect(spy).toHaveBeenCalled();
  });

  test.each(newFields)('Deve retornar erro com id não existente', async (chave, param) => {
    const requisicao = { request };
    const spy = jest.spyOn(requisicao, 'request');
    await requisicao.request(app)
      .put(`/categories/${fakeId}`)
      .send(param)
      .expect(404);

    expect(spy).toHaveBeenCalled();
  });

  test.each(newFields)('Deve retornar erro com id em formato inválido', async (chave, param) => {
    const requisicao = { request };
    const spy = jest.spyOn(requisicao, 'request');
    await requisicao.request(app)
      .put(`/categories/${invalidId}`)
      .send(param)
      .expect(400);

    expect(spy).toHaveBeenCalled();
  });
});

describe('PATCH em /categories/id', () => {
  it('Deve ativar a categoria selecionada', async () => {
    await request(app)
      .patch(`/categories/${responseId}`)
      .expect(200);
  });

  it('Deve retornar erro com id não existente', async () => {
    await request(app)
      .patch(`/categories/${fakeId}`)
      .expect(404);
  });
});

describe('DELETE em /categories/id', () => {
  it('Deve deletar a categoria adicionada', async () => {
    await request(app)
      .delete(`/categories/${responseId}`)
      .expect(200);
  });

  it('Deve retornar erro com id não existente', async () => {
    await request(app)
      .delete(`/categories/${fakeId}`)
      .expect(404);
  });

  it('Deve retornar erro com id em formato inválido', async () => {
    await request(app)
      .delete(`/categories/${invalidId}`)
      .expect(404);
  });
});
