const expect = require('chai').expect;
const request = require('supertest');
const server = require('../core');

describe( 'tribal server', function() {

  it( 'returns status 200 in response to GET /', function() {
    // return is important; this is an asychronous operation, and it returns a promise
    // without the return, mocha doesn't know when the test has completed
    return request(server)
      .get('/')
      .expect(200);
  });

  it( 'verifies a database connection in response to GET /test', function() {
    // return is important; this is an asychronous operation, and it returns a promise
    // without the return, mocha doesn't know when the test has completed
    return request(server)
      .get('/test')
      .expect(200)
      .expect(server.DATABASE_CONNECTED_MESSAGE_PREFIX + server.DATABASE_CONNECTED_MESSAGE);
  });

  it( 'returns status 200 in response to GET /tracks', function() {
    return request(server)
    .get('/tracks')
    .expect(200);
  });
});
