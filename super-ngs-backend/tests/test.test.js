import request from 'supertest';
import app from '../app.js';

beforeAll(() => server = app.listen(3000));

// Tests if the test route returns data
describe('GET Test Route', () => {
  it('should exist', async () => {
    const res = await request(server).get('/test');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ success: true, data: 'Hello, World!' });
  });
});

afterAll(() => server.close());
