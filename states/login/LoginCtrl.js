var app = angular.module('utahrenfaire');

app.controller('LoginCtrl', function ($scope, authService, $location) {
  //Step 4 of Registration
  var loginCallback = function(user){
    user.uid = user.uid.replace('simplelogin:', '');
    $location.path('/dashboard/' + user.uid)
  };

  $scope.login = function () {
    return authService.login($scope.details, loginCallback);
  };

  //Step 2 of Registration
  $scope.register = function () {
    return authService.register($scope.details, loginCallback);
  };

});