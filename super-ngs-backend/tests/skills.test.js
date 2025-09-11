import request from 'supertest';
import app from '../app.js';

beforeAll(() => server = app.listen(3000));

// Tests if the base skills route returns data
describe('GET /skills', () => {
  it('should exist', async () => {
    const res = await request(server).get('/skills');
    expect(res.statusCode).toEqual(200);
  });

  it('should allow retrieving specific skills', async () => {
    const res = await request(server).get('/skills?id=0');
    expect(res.statusCode).toEqual(200);
  });
});

afterAll(() => server.close());
