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
                $scope.returnData = angular.fromJson(response.data);  
                var val = $scope.returnData.data;
                console.log(val)                  
                var returnUsername = function() {
                     
                    //return codaData.values
                    };//values) => values.length > 5);//['c-A4RQAnykpb']
                //var returnRealUsername = returnUsername.filter((values) => values.length > 1);

                if ($scope.username === 'a' && $scope.password === 'a'){
                //console.log($scope.returnData);
                //console.log($scope.returnData.values);
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/');
                } else {
                    $scope.error = 'Username or password is incorrect';
                    $scope.dataLoading = false;
                    //console.log(angular.fromJson(response.data));
                 
                    //if (response.success) {
                //    AuthenticationService.SetCredentials($scope.username, $scope.password);
                //    //$scope.content = response.data;
                //    $location.path('/');
                //} else {
                //    $scope.error = response.data//response.message;
                //    $scope.dataLoading = false;
                }
            });
        };

  
    }]);