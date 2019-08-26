        service.Login = function (username, password, callback) {
            $http({
                url: "https://coda.io/apis/v1beta1/docs/ozj52aClzb/tables/grid-OzYH7L45PF/rows",
                method: 'GET',
                headers: {
                    "authorization": 'Bearer '+'09197407-859e-4cc7-95dd-140014d80e1d'},
                isArray: true,
                transformResponse: function(data, header) {
                    var wrapped = angular.fromJson(data);
                    return wrapped.items;
                    }  
                })
            }).success(function (response){
                callback(response); 
            });
        };