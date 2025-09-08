import request from 'supertest';
import app from '../app.js';

beforeAll(() => server = app.listen(3000));

// Tests if the headshot route returns data
describe('GET /public/headshot', () => {
  it('should exist', async () => {
    const res = await request(server).get('/public/headshot');
    expect(res.statusCode).toEqual(200);
  });
});

// Tests if the headline route returns data
describe('GET /public/headline', () => {
  it('should exist', async () => {
    const res = await request(server).get('/public/headline');
    expect(res.statusCode).toEqual(200);
  });
});

// Tests if the headline/name route returns data
describe('GET /public/headline/name', () => {
  it('should exist', async () => {
    const res = await request(server).get('/public/headline/name');
    expect(res.statusCode).toEqual(200);
  });
});

// Tests if the headline/title route returns data
describe('GET /public/headline/title', () => {
  it('should exist', async () => {
    const res = await request(server).get('/public/headline/title');
    expect(res.statusCode).toEqual(200);
  });
});

// Tests if the headline/linkedin route returns data
describe('GET /public/headline/linkedin', () => {
  it('should exist', async () => {
    const res = await request(server).get('/public/headline/linkedin');
    expect(res.statusCode).toEqual(200);
  });
});

// Tests if the headline/github route returns data
describe('GET /public/headline/github', () => {
  it('should exist', async () => {
    const res = await request(server).get('/public/headline/github');
    expect(res.statusCode).toEqual(200);
  });
});

afterAll(() => server.close());
