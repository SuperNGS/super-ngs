import request from 'supertest';
import app from '../app.js';

beforeAll(() => server = app.listen(3000));

describe('GET /projects', () => {
  it('should exist', async () => {
    const res = await request(server).get('/projects');
    expect(res.statusCode).toEqual(200);
  });

  it('should allow getting a specific projects', async () => {
    const res = await request(server).get('/projects/0');
    expect(res.statusCode).toEqual(200);
  });
});

afterAll(() => server.close());