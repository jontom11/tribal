const mongoose = require( './init' );

const PlayListSchema = mongoose.Schema({
  name: {
    type: String,
  },
  songs: [{
    uri: String,
    count: {type: Array, default: []}
  }]
});

const PlayList = mongoose.model('PlayList', PlayListSchema);

// getAllPlayLists retrieves all playlists
const getAllPlayLists = function() {
  return PlayList.find({});
};

// getSinglePlayList retrieves a single PlayList associated with the given id or name
// returns promise, resolves with playlist document
const getSinglePlayList = function( idOrName ) {
  if ( /^[0-9a-f]{24}$/.test(idOrName) ) {
    return PlayList.findById( idOrName );
  } else {
    return PlayList.findOne({ name: idOrName });
  }
};

// insertSong inserts a song(s) into the db
const insertSong = function(id, song) {
  return getSinglePlayList( id )
    .then(playList => {
      playList.songs.push(song);
      return playList.save();
    });
};

const removeSong = function(playlistId, uri) {
  return getSinglePlayList( playlistId )
    .then( playList => {
      var dbSongs = playList.songs;
      for (var songIndex = 0; songIndex < dbSongs.length; songIndex++) {
        var songId = dbSongs[songIndex].uri.toString();
        if (uri === songId) {
          dbSongs.splice(songIndex, 1);
          return playList.save();
        }
      }
    });
};

// find clicked song in db, increase count, save count to db. 
const insertCount = function(id, clickedSong, count, userAgent) {
  return getSinglePlayList( id )
    .then( playList => {
      var dbSongs = playList.songs;
      for (var songIndex = 0; songIndex < dbSongs.length; songIndex++) {
        var songId = dbSongs[songIndex]._id.toString();
        // match clicked song to songId in database
        if (songId === clickedSong) {
          // if userAgent identification does not exists on clicked song
          var indexOfUserAgent = dbSongs[songIndex].count.indexOf(userAgent);
          if ( indexOfUserAgent === -1) {
            // we push to end of count array
            dbSongs[songIndex].count.push(userAgent);
          } else {
            // splice at that index 
            dbSongs[songIndex].count.splice(indexOfUserAgent, 1);
          }
          return playList.save();
        }
      }
    });
};

// create a new playlist, 'name', populated with no songs
// return promise, resolves with new document
const createPlayList = function( name ) {
  return PlayList.create({ name: name });
};

module.exports.mongoose = mongoose;
module.exports.getAllPlayLists = getAllPlayLists;
module.exports.getSinglePlayList = getSinglePlayList;
module.exports.insertSong = insertSong;
module.exports.removeSong = removeSong;
module.exports.insertCount = insertCount;
module.exports.createPlayList = createPlayList;
