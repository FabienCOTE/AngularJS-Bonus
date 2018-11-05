var app = angular.module("appAlert",[]);

app.controller("clickCtrl", ["$scope", function($scope) {
  $scope.clickButton = function() {
    alert("Message alerte");
  }
}]);
