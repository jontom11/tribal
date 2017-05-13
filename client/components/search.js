const SearchController = function() {

};

const Search = function() {
  return {
    scope: {},
    restrict: 'E',
    controller: function() {},
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '/templates/search.html'
  };
};

angular.module('tribal').directive('search', Search);
