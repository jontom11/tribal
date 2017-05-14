const tribalServer = function( $http ) {

  let socket = io();

  this.test = function() {
    return $http.get( '/test' );
  };

  // get (new or existing) playlist from server
  this.getPlaylist = function( playlistId, callback ) {
    socket.emit( 'playlist', playlistId, callback );
  };

  // request that the server add a song to the playlist
  this.addSong = function( uri ) {
    socket.emit( 'add song', uri );
  };

  this.registerSongAddedHandler = function( callback ) {
    socket.on( 'song added', callback );
  };

  this.spotifySearch = function( query, callback ) {
    callback( [{"uri":"spotify:track:3l3Wh4KRKll7nFdpCFfDe5","artist":"William Ryan Fritch"},{"uri":"spotify:track:5c882VwvW0mlp82KaSk99W","artist":"As I Lay Dying"},{"uri":"spotify:track:63cAPgcG12kH4Qg39qElic","artist":"Jeremy Passion"},{"uri":"spotify:track:6iEuPl2CxF7SCxzi1VkWeY","artist":"Afta-1"},{"uri":"spotify:track:3gCInuWVhMlkUwVyhBVLT0","artist":"Afta-1"},{"uri":"spotify:track:5RzFRviYMsgWikwQvkCy7j","artist":"Adairs Run"},{"uri":"spotify:track:49edox3q89CG1g6rJVfmHE","artist":"Afta-1"},{"uri":"spotify:track:555gxXfb1TjfdX043yVCvk","artist":"Afta-1"},{"uri":"spotify:track:7jCw37IN0vSjxPDbusMMED","artist":"Afta-1"},{"uri":"spotify:track:4F1lG6QULlE8w04iQapWXX","artist":"Clear Conscience"},{"uri":"spotify:track:4CtH9JVfAyzWNPoXYO6YEO","artist":"Downsyde"},{"uri":"spotify:track:3GUHixuR34ZORfSUXXSKJF","artist":"Afta-1"},{"uri":"spotify:track:1MWvORNTVO4QQ21O1ToQpO","artist":"Afta-1"},{"uri":"spotify:track:3dWcuI5Azn1gYREoUdADPZ","artist":"Afta-1"},{"uri":"spotify:track:05QTaq7a6C02V5Duiv5wZf","artist":"Afta-1"},{"uri":"spotify:track:0H0MzhCED17s0SS0erUAPC","artist":"Afta-1"},{"uri":"spotify:track:7EmsQE0E0cww94BkvwsjSH","artist":"Afta-1"},{"uri":"spotify:track:1KWjYy2DiQNLt9XrxwdZ5a","artist":"Afta-1"},{"uri":"spotify:track:1WVddjqnQ58iyA5wP9fstv","artist":"Paul Leonard-Morgan"},{"uri":"spotify:track:6HLJuAenKW89zYAZOstC2z","artist":"Afta-1"}] );
  };
};

angular.module('tribal').service('tribalServer', ['$http', tribalServer]);
