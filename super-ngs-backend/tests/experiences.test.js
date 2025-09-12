import request from 'supertest';
import app from '../app.js';

beforeAll(() => server = app.listen(3000));

describe('GET /experiences', () => {
  it('should exist', async () => {
    const res = await request(server).get('/experiences');
    expect(res.statusCode).toEqual(200);
  });

  it('should allow getting a specific experience', async () => {
    const res = await request(server).get('/experiences/0');
    expect(res.statusCode).toEqual(200);
  });
});

afterAll(() => server.close());