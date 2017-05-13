const SearchController = function( tribalServer ) {

  this.searchButtonHandler = (query) => {
    tribalServer.spotifySearch( query, this.searchResultsHandler );
  };
};

const Search = function() {
  return {
    scope: {
      searchResultsHandler: '<',
    },
    restrict: 'E',
    controller: [ 'tribalServer', SearchController ],
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '/templates/search.html'
  };
};

angular.module('tribal').directive('search', Search);
