angular.module('tribal')

.directive('searchResults', function() {
  return {
    scope: {
      
    },
    restrict: 'E',
    controller: function() {},
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '/templates/searchResults.html'
  };
});