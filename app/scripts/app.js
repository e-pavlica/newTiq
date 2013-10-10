'use strict';

angular.module('newTicApp', ['firebase'])
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
  .directive('wait', function () { return {
    replace:true,
    restrict:"A",
    link: function(scope, element, attr){
      scope.$watch(attr.wait, function(value) {
        if(value)
          element[0].style.display = "none";
      })
    }
  }

  });
