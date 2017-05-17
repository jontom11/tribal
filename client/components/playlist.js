const PlaylistController = function( tribalServer, $location, $scope ) {
  
  //Like button counter
  let table = {};
  let count = 0;
  this.likeButtonHandler = (song) => {
    if (table[song._id] === undefined) {
      table[song._id] = 1;
    } else {
      table[song._id]++;
    }
    tribalServer.likeButton(count, song._id)
    console.log(song._id, 'has been liked:', table[song._id],'times')
  };

  this.songAddedHandler = (uri) => {
    this.playlist.push({ uri: uri });
    $scope.$apply();
  };

  tribalServer.registerSongAddedHandler( this.songAddedHandler );

  tribalServer.getPlaylist( $location.search().playlist, (res) => {
    $location.search( 'playlist', res._id );
    this.playlist = res.songs;
    $scope.$apply();
  });
};

const Playlist = function() {
  return {
    scope: {},
    restrict: 'E',
    controller: [ 'tribalServer', '$location', '$scope', PlaylistController ],
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '/templates/playlist.html'
  };
};


angular.module('tribal').directive('playlist', Playlist);

