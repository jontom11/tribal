const MainController = function( tribalServer, $location ) {

  tribalServer.test()
    .then( (res) => {
      this.messageFromServer = res.data;
    });

  let socket = io();
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
