var app = angular.module("app",[]);

app.controller("clickCtrl", function($scope) {
  $scope.clickButton = function(){
    alert("Message alerte :)");
  }
});
