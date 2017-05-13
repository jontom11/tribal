const tribalServer = function( $http ) {
  let socket = io();

  this.test = function() {
    return $http.get( '/test' );
  };

  // get (new or existing) playlist from server
  this.getPlaylist = function( playlistId, callback ) {
    socket.emit( 'playlist', playlistId, callback );
  };
};

angular.module('tribal').service('tribalServer', ['$http', tribalServer]);
