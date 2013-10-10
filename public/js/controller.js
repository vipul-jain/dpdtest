/**
 * Created with JetBrains WebStorm.
 * User: wa
 * Date: 9/7/13
 * Time: 6:21 PM
 * To change this template use File | Settings | File Templates.
 */


app.controller('loginController', function($scope, $resource, $location, $rootScope){
    $scope.Login = {
        username : "",
        password : ""
    };

    $scope.fnLogin = function(){
        if($scope.Login.username && $scope.Login.password){
            dpd.users.login($scope.Login,function(data,err){
                if(err){
                    alert("Error");
                    return;
                }
                dpd.users.me(function(data){
                    $rootScope.currentUser = data;
                    $location.path('/member');
                    if(!$scope.$$phase)
                        $scope.$apply();
                });

            });
        }else{
            alert("Enter proper values");
        }
    }
});


app.controller('memberController', function($scope, $resource, $location, $rootScope){

});

app.controller('regController', function($scope, $resource, $location, $rootScope){

    $scope.Reg = {
        username : "",
        password : ""
    };

    $scope.Register = function(){
        if($scope.Reg.username && $scope.Reg.password){
            dpd.users.post($scope.Reg,function(data,err){
                if(err){
                    alert("Error");
                    return;
                }
                alert("successfully regisrtered");
                $location.path('/login');
                $scope.$apply();
            });
        }else{
            alert("Enter proper values");
        }
    }

});



