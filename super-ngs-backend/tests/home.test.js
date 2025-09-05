import request from 'supertest';
import app from '../app.js';

beforeAll(() => server = app.listen(3000));

// Tests if the headshot route returns data
describe('GET /home/headshot', () => {
  it('should exist', async () => {
    const res = await request(server).get('/home/headshot');
    expect(res.statusCode).toEqual(200);
  });
});

afterAll(() => server.close());
