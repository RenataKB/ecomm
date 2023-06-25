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
const newProduct = {
  NOME: 'Cama queen size',
  DESCRIÇÃO: 'Cama Queen Size Dener Oppa Design - Mel',
  SLUG: 'cama-queen-size-dener',
  'PREÇO UNITÁRIO': 3100.00,
  'QUANTIDADE EM ESTOQUE': 2,
  CATEGORIA: '64958602cdf53bd1574754a1',
};
const fakeId = '55958602cdf53bd1574754a1';
const invalidId = '1234';
const newFields = [
  ['NOME', { NOME: 'Cama solteiro' }],
  ['DESCRIÇÃO', { DESCRIÇÃO: 'Cama Solteiro Dener Oppa Design - Branca' }],
  ['SLUG', { SLUG: 'cama-solteiro-dener' }],
  ['PREÇO UNITÁRIO', { 'PREÇO UNITÁRIO': 1800.00 }],
  ['QUANTIDADE EM ESTOQUE', { 'QUANTIDADE EM ESTOQUE': 3 }],
  ['CATEGORIA', { CATEGORIA: '64958616cdf53bd1574754a3' }],
];

describe('GET em /products', () => {
  it('Deve retornar a lista de produtos', async () => {
    await request(app)
      .get('/products')
      .expect(200);
  });
});

describe('POST em /products', () => {
  it('Deve adicionar um novo produto', async () => {
    const resposta = await request(app)
      .post('/products')
      .send(newProduct)
      .expect(201);
    responseId = resposta.body._id;
  });

  it('Não deve adicionar nada ao passar o body vazio', async () => {
    await request(app)
      .post('/products')
      .send({})
      .expect(400);
  });
});

describe('GET em /products/id', () => {
  it('Deve retornar a categoria selecionada', async () => {
    await request(app)
      .get(`/products/${responseId}`)
      .expect(200);
  });

  it('Deve retornar erro com id não existente', async () => {
    await request(app)
      .get(`/products/${fakeId}`)
      .expect(404);
  });

  it('Deve retornar erro com id em formato inválido', async () => {
    await request(app)
      .get(`/products/${invalidId}`)
      .expect(404);
  });
});

describe('PUT em /products/id', () => {
  test.each(newFields)('Deve alterar o campo %s', async (chave, param) => {
    const requisicao = { request };
    const spy = jest.spyOn(requisicao, 'request');
    await requisicao.request(app)
      .put(`/products/${responseId}`)
      .send(param)
      .expect(200);

    expect(spy).toHaveBeenCalled();
  });

  test.each(newFields)('Deve retornar erro com id não existente', async (chave, param) => {
    const requisicao = { request };
    const spy = jest.spyOn(requisicao, 'request');
    await requisicao.request(app)
      .put(`/products/${fakeId}`)
      .send(param)
      .expect(404);

    expect(spy).toHaveBeenCalled();
  });

  test.each(newFields)('Deve retornar erro com id em formato inválido', async (chave, param) => {
    const requisicao = { request };
    const spy = jest.spyOn(requisicao, 'request');
    await requisicao.request(app)
      .put(`/products/${invalidId}`)
      .send(param)
      .expect(400);

    expect(spy).toHaveBeenCalled();
  });

  it('Deve retornar erro com id de categoria inválido', async () => {
    await request(app)
      .put(`/products/${responseId}`)
      .send({ CATEGORIA: fakeId })
      .expect(400);
  });
});

describe('DELETE em /products/id', () => {
  it('Deve deletar o produto adicionado', async () => {
    await request(app)
      .delete(`/products/${responseId}`)
      .expect(200);
  });

  it('Deve retornar erro com id não existente', async () => {
    await request(app)
      .delete(`/products/${fakeId}`)
      .expect(404);
  });

  it('Deve retornar erro com id em formato inválido', async () => {
    await request(app)
      .delete(`/products/${invalidId}`)
      .expect(404);
  });
});
