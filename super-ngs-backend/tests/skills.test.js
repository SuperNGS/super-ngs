import request from 'supertest';
import app from '../app.js';

beforeAll(() => server = app.listen(3000));

// Tests if the base skills route returns data
describe('GET /skills', () => {
  it('should exist', async () => {
    const res = await request(server).get('/skills');
    expect(res.statusCode).toEqual(200);
  });
});

describe('GET /skills/soft', () => {
  it('should exist', async () => {
    const res = await request(server).get('/skills/soft');
    expect(res.statusCode).toEqual(200);
  });

  it('should allow getting a specific soft skill', async () => {
    const res = await request(server).get('/skills/soft/0');
    expect(res.statusCode).toEqual(200);
  });
});

describe('GET /skills/technical', () => {
  it('should exist', async () => {
    const res = await request(server).get('/skills/technical');
    expect(res.statusCode).toEqual(200);
  });

  it('should allow getting a specific technical skill', async () => {
    const res = await request(server).get('/skills/technical/0');
    expect(res.statusCode).toEqual(200);
  });
});

afterAll(() => server.close());
