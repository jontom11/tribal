const TribelistController = function( tribalServer, $location, $scope ) {

  this.songAddedHandler = (uri) => {
    this.playlist.push( uri );
    $scope.$apply();
  };

  tribalServer.registerSongAddedHandler( this.songAddedHandler );

  tribalServer.getPlaylist( $location.search().playlist, (res) => {
    $location.search( 'playlist', res._id );
    this.playlist = res.songs;
    $scope.$apply();
  });
};

angular.module('tribal')

.directive('tribelist', function() {
  return {
    scope: {

    },
    restrict: 'E',
    controller: [ 'tribalServer', '$location', '$scope', TribelistController ],
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '/templates/tribelist.html'
  };
});
