        service.Login = function (username, password, callback) {

            /* Dummy authentication for testing, uses $timeout to simulate api call
             ----------------------------------------------*/
            //$timeout(function () {
            //    var response = { success: username === 'test' && password === 'test' };
            //    if (!response.success) {
            //        response.message = 'Username or password is incorrect';
            //    }
            //    callback(response);
            //}, 1000);


            /* Use this for real authentication
             ----------------------------------------------*/
            //$http.get('https://coda.io/apis/v1beta1/docs/ozj52aClzb/tables/grid-OzYH7L45PF/rows', { username: username, password: password })
            //    .success(function (response) {
            //        callback(response);
            //    });
            $http({
                url: "https://coda.io/apis/v1beta1/docs/ozj52aClzb/tables/grid-OzYH7L45PF/rows",
                method: 'GET',
                headers: {
                    "authorization": 'Bearer '+'09197407-859e-4cc7-95dd-140014d80e1d'
                }
            }).success(function (response){
                callback(response); 
            });    

        };