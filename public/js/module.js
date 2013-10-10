/**
 * Created with JetBrains WebStorm.
 * User: wa
 * Date: 9/7/13
 * Time: 6:21 PM
 * To change this template use File | Settings | File Templates.
 */

var app = angular.module('myFirstApp',['ngResource']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'loginController'});
    $routeProvider.when('/register', {templateUrl: 'partials/registration.html', controller: 'regController'});
    $routeProvider.when('/member', {templateUrl: 'partials/member.html', controller: 'memberController'});

    $routeProvider.otherwise({redirectTo: '/login'});
}]);

app.controller('AppCtrl', function($scope, $resource, $location, $rootScope){

    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        dpd.users.me(function(data, err){
            if(data){
                $rootScope.currentUser = data;
                $rootScope.showLogout = true;
                $location.path("/member");
                if(!$scope.$$phase)
                    $scope.$apply();
            }else{
                if($location.$$path == "/register"){
                    $location.path($location.$$path);
                    return;
                }


                $rootScope.currentUser = "";
                $rootScope.showLogout = false;
                $location.path("/login");
                if(!$scope.$$phase)
                    $scope.$apply();
            }

        });
    });


    $scope.logoutUser = function(){
        dpd.users.logout(function(data, err){
            $location.path("/login");
            if(!$scope.$$phase)
                $scope.$apply();
        });
    }

});




