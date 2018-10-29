var app = angular.module('app', ['ngMessages']);

app.controller("formulaireCtrl", ['$scope', function($scope){

    $scope.submit = function() {

            if (userForm.email.$valid === true) {
                $scope.courrier = "true";
            }
            else $scope.courrier = "false";

      };
}]);
