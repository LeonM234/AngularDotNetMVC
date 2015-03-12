var AngularDotNetMVC = angular.module('AngularDotNetMVC', ['ngRoute']);

AngularDotNetMVC.controller('LandingPageController', LandingPageController);
AngularDotNetMVC.controller('LoginController', LoginController);
AwesomeAngularMVCApp.controller('RegisterController', RegisterController);

AngularDotNetMVC.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
AngularDotNetMVC.factory('LoginFactory', LoginFactory);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        })
        .when('/login?returnUrl', {
            templateUrl: 'Account/Login',
            controller: LoginController
        })
        .when('/register', {
            templateUrl: '/Account/Register',
            controller: RegisterController
        });
    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$routeProvider', '$httpProvider'];

AngularDotNetMVC.config(configFunction);