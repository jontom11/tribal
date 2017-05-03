const express = require( 'express' );
const db = require( '../database' );
const Promise = require( 'bluebird' );

const serverPort = process.env.TRIBAL_PORT || 4242;

const app = express();

app.use( express.static(`${__dirname}/../client/dist`) );

app.listen = Promise.promisify( app.listen );
app.listen( serverPort )
  .then( () => {
    console.log( `Tribal server is listening on port ${serverPort}.` );
  });
