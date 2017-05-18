const LoginController = function( tribalServer ) {

  this.loginButtonHandler = () => {
    tribalServer.facebookAuth()
    .then( (results) => {   
      console.log('login button clicked!');
    });
  };
};

const Login = function() {
  return {
    scope: {},
    restrict: 'E',
    controller: [ 'tribalServer', LoginController ],
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '/templates/login.html'
  };
};

angular.module('tribal').directive('login', Login);
