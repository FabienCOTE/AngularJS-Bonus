var app = angular.module("app", []);

  app.controller("mailCtrl", ["$scope", function($scope) {
    $scope.regex = "[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+)?";
  }]);
