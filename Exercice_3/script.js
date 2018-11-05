var app = angular.module("app", ["ngRoute"]);

app.controller('formCtrl', function($scope) {
  $scope.globalArray = [];
  $scope.clickButton = function() {
    $scope.sizeArray = $scope.globalArray.length;
    $scope.formArray = [$scope.sizeArray, $scope.formLastName, $scope.formEmail, $scope.formTopic, $scope.formText];
    $scope.globalArray.push($scope.formArray);
    console.log($scope.globalArray);
  }
});

app.config(function($routeProvider) {
  $routeProvider
  .when("/:globalArray", {
    template : "<h1>{{globalArrays}}</h1><p>Click on the links to change this content</p>"
  })
  .when("/1", {
    template : "<h1>{{globalArrays[3]}}</h1><p>Bananas contain around 75% water.</p>"
  })
  .when("/2", {
    template : "<h1>{{globalArrays[3]}}</h1><p>Tomatoes contain around 95% water.</p>"
  });
});
