'use strict';

angular.module('newTicApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .directive('myTurn', function () { return {
    replace:true,
    restrict:"A",
    link: function(scope, element, attr){
      scope.$watch(attr.myTurn, function(value) {
        if(value)
          element.css('background','#8CC157');
      })
    }
  }

  });
