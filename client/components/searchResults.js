const SearchResultsController = function() {

};

const SearchResults = function() {
  return {
    scope: {},
    restrict: 'E',
    controller: SearchResultsController,
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '/templates/searchResults.html'
  };
};

angular.module('tribal').directive('searchResults', SearchResults);
