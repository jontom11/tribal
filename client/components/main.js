const MainController = function( tribalServer, $location ) {

  tribalServer.test()
    .then( (res) => {
      this.messageFromServer = res.data;
    });

  let socket = io();

  // get (new or existing) playlist from server
  let urlParams = $location.search();
  socket.emit( 'playlist', urlParams.playlist, (res) => {
    $location.search( 'playlist', res._id );
    this.songs = res.songs;
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
