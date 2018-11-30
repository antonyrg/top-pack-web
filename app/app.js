'use strict';

// Declare app level module which depends on views, and core components
angular.module('TopPack', [
  'ngRoute',
  'TopPack.view1',
  'TopPack.view2',
  'TopPack.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
