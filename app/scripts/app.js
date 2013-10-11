'use strict';

angular.module('newTicApp', ['firebase'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      })
      // .when('/game/:gameUrl')
      .otherwise({
        redirectTo: '/'
      });
  })
  .directive('wait', function () { return {
    replace:true,
    restrict:"A",
    link: function(scope, element, attr){
      scope.$watch(attr.wait, function(value) {
        switch(value){
        case true:
          element[0].style.display = "none";
          break;
        case false:
          element[0].style.display = "block";
          break;
        }
      })
    }
  }

  });
