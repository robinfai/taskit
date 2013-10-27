/**
 * Created with JetBrains PhpStorm.
 * User: robinfai
 * Date: 13-10-27
 * Time: 上午8:25
 * To change this template use File | Settings | File Templates.
 */
define(['app','semantic','directives'], function(app) {
    'use strict';

    app.controller('UserFormController',['$scope',
        function UserFormController($scope) {
            $scope.user = {};
            $scope.loginTemplate = 'partials/user-form/login.html';
            $scope.registerTemplate = 'partials/user-form/register.html';
            $scope.errorClass = '';
        }]);
    app.controller('LoginController',['$scope', '$http',
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
    app.controller('RegisterController',['$scope', '$http',
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
});