const MainController = function( tribalServer, $location ) {

  tribalServer.test()
    .then( (res) => {
      this.messageFromServer = res.data;
    });

  tribalServer.getPlaylist( $location.search().playlist, (res) => {
    $location.search( 'playlist', res._id );
    this.playlist = res.songs;
  });
};

const Main = function() {
  return {
    scope: {},
    restrict: 'E',
    controller: [ 'tribalServer', '$location', MainController ],
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '/templates/main.html',
  };
};

angular.module('tribal').directive('main', Main);
