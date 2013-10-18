/**
 * Created with JetBrains PhpStorm.
 * User: robinfai
 * Date: 13-10-17
 * Time: 下午11:26
 * To change this template use File | Settings | File Templates.
 */

var apiUrl = '/taskit/api/index.php'


var taskItApp = angular.module('taskItApp', ['ngRoute', 'taskItAppControllers']);
taskItApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/user-form', {
                templateUrl: 'partials/user-form.html',
                controller: 'LoginController'
            }).
            otherwise({
                redirectTo: '/user-form'
            });
    }]);
taskItApp.value('appName', 'taskItApp');
taskItApp.directive('userForm', function () {
    return function ($scope, $element, $attrs, $ctrl) {
        $element.form({
            username: {
                identifier: 'username',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter a username'
                    },
                    {
                        type: 'length[6]',
                        prompt: 'Your username must be at least 6 characters'
                    }
                ]
            },
            password: {
                identifier: 'password',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter a password'
                    },
                    {
                        type: 'length[6]',
                        prompt: 'Your password must be at least 6 characters'
                    }
                ]
            }
        }, {
            inline: true,
            on: 'blur'
        });
        $scope.isInvalid = function () {
            return !$element.form('validate form');
        };
    }
});
var taskItAppControllers = angular.module('taskItAppControllers', []);
taskItAppControllers.controller('LoginController',['$scope', '$http',
    function LoginController($scope,$http) {
        $scope.user = {};
        $scope.user.username = 'user123';
        $scope.user.password = 'user123';
        $scope.requestUrl = apiUrl+'/user/login';
        $scope.submit = function () {
            if (this.isInvalid()) {
                return;
            }
            this.loading = true;
            $http.get(this.requestUrl).success(function(json){
                if(json.status){
                    $scope.user.username = json.message;
                    $scope.loading = false;
                }
            });
        }

    }]);
taskItAppControllers.controller('RegisterController',['$scope', '$http',
    function RegisterController($scope,$http) {
        $scope.user = {};
        $scope.user.username = 'user123';
        $scope.user.password = 'user123';
        $scope.requestUrl = apiUrl+'/user/register';
        $scope.submit = function () {
            if (this.isInvalid()) {
                return;
            }
            this.loading = true;
            $http.get(this.requestUrl).success(function(json){
                console.log(json)
                if(json.status){
                    $scope.user.username = json.message;
                    $scope.loading = false;
                }
            });
        }
    }]);
taskItApp.directive('userTab', function () {
    var userTab = function ($scope, $element, $attrs, $ctrl) {
        $($element).find('.item').tab();
    }

    return {compile: function () {
        return userTab
    }}
});

