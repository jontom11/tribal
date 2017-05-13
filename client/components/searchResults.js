angular.module('tribal')

.controller('searchResultsController', function() {
  this.testData = testData;
})

.directive('searchResults', function() {
  return {
    scope: {},
    restrict: 'E',
    controller: 'searchResultsController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '/templates/searchResults.html'
  };
});

var testData = [
{
uri: "spotify:track:49edox3q89CG1g6rJVfmHE",
artist: "William Ryan Fritch"
},
{
uri: "spotify:track:5c882VwvW0mlp82KaSk99W",
artist: "As I Lay Dying"
},
{
uri: "spotify:track:63cAPgcG12kH4Qg39qElic",
artist: "Jeremy Passion"
},
{
uri: "spotify:track:6iEuPl2CxF7SCxzi1VkWeY",
artist: "Afta-1"
},
{
uri: "spotify:track:3gCInuWVhMlkUwVyhBVLT0",
artist: "Afta-1"
},
{
uri: "spotify:track:5RzFRviYMsgWikwQvkCy7j",
artist: "Adairs Run"
},
{
uri: "spotify:track:49edox3q89CG1g6rJVfmHE",
artist: "Afta-1"
},
{
uri: "spotify:track:555gxXfb1TjfdX043yVCvk",
artist: "Afta-1"
},
{
uri: "spotify:track:7jCw37IN0vSjxPDbusMMED",
artist: "Afta-1"
},
{
uri: "spotify:track:4F1lG6QULlE8w04iQapWXX",
artist: "Clear Conscience"
},
{
uri: "spotify:track:4CtH9JVfAyzWNPoXYO6YEO",
artist: "Downsyde"
},
{
uri: "spotify:track:3GUHixuR34ZORfSUXXSKJF",
artist: "Afta-1"
},
{
uri: "spotify:track:1MWvORNTVO4QQ21O1ToQpO",
artist: "Afta-1"
},
{
uri: "spotify:track:3dWcuI5Azn1gYREoUdADPZ",
artist: "Afta-1"
},
{
uri: "spotify:track:05QTaq7a6C02V5Duiv5wZf",
artist: "Afta-1"
},
{
uri: "spotify:track:0H0MzhCED17s0SS0erUAPC",
artist: "Afta-1"
},
{
uri: "spotify:track:7EmsQE0E0cww94BkvwsjSH",
artist: "Afta-1"
},
{
uri: "spotify:track:1KWjYy2DiQNLt9XrxwdZ5a",
artist: "Afta-1"
},
{
uri: "spotify:track:1WVddjqnQ58iyA5wP9fstv",
artist: "Paul Leonard-Morgan"
},
{
uri: "spotify:track:6HLJuAenKW89zYAZOstC2z",
artist: "Afta-1"
}
];