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
                controller: 'UserFormController'
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
                        prompt: '请输入用户名'
                    },
                    {
                        type: 'length[6]',
                        prompt: '用户名最少长度为6位'
                    }
                ]
            },
            password: {
                identifier: 'password',
                rules: [
                    {
                        type: 'empty',
                        prompt: '请输入密码'
                    },
                    {
                        type: 'length[6]',
                        prompt: '密码最少长度为6位'
                    }
                ]
            }
        });
        $scope.isInvalid = function () {
            return !$element.form('validate form');
        };
        $scope.showError = function (message) {
            $scope.errorClass = 'error';
            $scope.errorMessage = message;
            $scope.loading = false;
        }
        $scope.success = function (){
            //$scope.user.username = json.message;
            //$scope.loading = false;
        }
    }
});
var taskItAppControllers = angular.module('taskItAppControllers', []);
taskItAppControllers.controller('UserFormController',['$scope',
    function UserFormController($scope) {
        $scope.user = {};
        $scope.loginTemplate = 'partials/user-form/login.html';
        $scope.registerTemplate = 'partials/user-form/register.html';
        $scope.errorClass = '';
    }]);
taskItAppControllers.controller('LoginController',['$scope', '$http',
    function LoginController($scope,$http) {
        $scope.requestUrl = apiUrl+'/user/login';
        $scope.submit = function () {
            if (this.isInvalid()) {
                return;
            }
            this.loading = true;
            var data = {user:$scope.user};
            $http({method:'post',data:data,url:this.requestUrl}).success(function(json){
                if(json.status){
                    $scope.success();
                }else{
                    $scope.showError(json.message);
                }
            });
        }
    }]);
taskItAppControllers.controller('RegisterController',['$scope', '$http',
    function RegisterController($scope,$http) {
        $scope.requestUrl = apiUrl+'/user/register';
        $scope.submit = function () {
            if (this.isInvalid()) {
                return;
            }
            this.loading = true;
            var data = {user:$scope.user};
            $http({method:'post',data:data,url:this.requestUrl}).success(function(json){
                if(json.status){
                    $scope.user.username = json.message;
                    $scope.loading = false;
                }else{
                    $scope.user.username = json.message;j
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

