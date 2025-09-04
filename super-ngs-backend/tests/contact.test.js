import request from 'supertest';
import app from '../app.js';

beforeAll(() => server = app.listen(3000));

describe('POST /contact', function() {
  it('responds with json after sending a valid email', function(done) {
    request(app)
      .post('/contact')
      .send({ name: 'John Doe', email: 'john.doe@example.com', message: "Hello, world!" }) // The request body
      .set('Accept', 'application/json') // Set the Accept header for JSON response
      .expect('Content-Type', /json/) // Expect a JSON content type in the response
      .expect(201) // Expect a 201 Created status code
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe('POST /contact no name', function() {
  it('responds with a 500 when POSTing without a name', function(done) {
    request(app)
      .post('/contact')
      .send({ email: 'john.doe@example.com', message: "Hello, world!" }) // The request body
      .set('Accept', 'application/json') // Set the Accept header for JSON response
      .expect('Content-Type', /json/) // Expect a JSON content type in the response
      .expect(500) // Expect a 201 Created status code
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe('POST /contact no email', function() {
  it('responds with a 500 when POSTing without an email', function(done) {
    request(app)
      .post('/contact')
      .send({ name: 'John Doe', message: "Hello, world!" }) // The request body
      .set('Accept', 'application/json') // Set the Accept header for JSON response
      .expect('Content-Type', /json/) // Expect a JSON content type in the response
      .expect(500) // Expect a 201 Created status code
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe('POST /contact no message', function() {
  it('responds with a 500 when POSTing without a message', function(done) {
    request(app)
      .post('/contact')
      .send({ name: 'John Doe', email: "john.doe@email.com" }) // The request body
      .set('Accept', 'application/json') // Set the Accept header for JSON response
      .expect('Content-Type', /json/) // Expect a JSON content type in the response
      .expect(500) // Expect a 201 Created status code
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});

afterAll(() => server.close());
