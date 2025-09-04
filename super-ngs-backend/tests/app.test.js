import request from 'supertest';
import app from '../app.js';

beforeAll(() => server = app.listen(3000));

// Tests if the server was able to be started
describe('Server Started', () => {
  it('should exist', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: 'Hello, World!' });
  });
});

afterAll(() => server.close());
