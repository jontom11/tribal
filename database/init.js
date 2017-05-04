const Promise = require( 'bluebird' );
const mongoose = require( 'mongoose' );
mongoose.Promise = Promise;

const databaseName = process.env.TRIBAL_MONGO_DBNAME || 'test';
const databaseUrl = process.env.TRIBAL_MONGO_URL || `mongodb://localhost/${databaseName}`;

mongoose.connect( databaseUrl )
  .then( () => {
    console.log( `Connected to database at ${databaseUrl}.` );
  })
  .catch( (err) => {
    console.log( err );
  });

module.exports = mongoose;
