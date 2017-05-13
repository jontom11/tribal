const Promise = require('bluebird');
const expect = require('chai').expect;
const request = require('supertest');

const server = require('../core');
const io = require('socket.io-client');

const db = require('../database');
const testData = require('./testData');

describe( 'tribal server', function() {

  describe( 'HTTP request handling', function() {

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

  describe( 'socket.io events', function() {

    let client;

    before( function() {
      return server.start();
    });

    beforeEach( function(done) {
      const serverUrl = `http://localhost:${server.SERVER_PORT}`;
      const socketIoOptions = {
        transports: ['websocket'],
        'force new connection': true
      };

      client = io.connect( serverUrl, socketIoOptions );
      client.on( 'connect', done );
    });

    afterEach( function(done) {
      client.on( 'disconnect', () => {
        done();
      });
      client.disconnect();
    });

    it( 'can establish socket.io connections', function() {
      expect(client.id).to.not.be.undefined;
    });
  });
});
