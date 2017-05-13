const TribelistController = function( tribalServer, $location ) {

  tribalServer.getPlaylist( $location.search().playlist, (res) => {
    $location.search( 'playlist', res._id );
    this.playlist = res.songs;
  });
};

angular.module('tribal')

.directive('tribelist', function() {
  return {
    scope: {

    },
    restrict: 'E',
    controller: [ 'tribalServer', '$location', TribelistController ],
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '/templates/tribelist.html'
  };
});
