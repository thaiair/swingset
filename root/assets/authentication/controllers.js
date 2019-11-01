'use strict';

angular.module('Authentication')

.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {

        // reset login status
        AuthenticationService.ClearCredentials();      

        $scope.login = function () {
            $scope.returnData = [];
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function (response) {
                $scope.returnData = response.data.items;  
                var isAuthenticated = 0;
                angular.forEach($scope.returnData, function (item) {
      
                   if($scope.username === item.values['c-A4RQAnykpb'] && $scope.password === item.values['c-NwLckyhxEo']) 
                        isAuthenticated = 1;
                 });
                    if (isAuthenticated  === 1) {
                   AuthenticationService.SetCredentials($scope.username, $scope.password);
                   $location.path('/');
                } else {
                   $scope.error = 'Username or password is incorrect';
                   $scope.dataLoading = false;
                }
            });
        };

  
    }]);