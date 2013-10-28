/**
 * Created with JetBrains PhpStorm.
 * User: robinfai
 * Date: 13-10-27
 * Time: 上午8:25
 * To change this template use File | Settings | File Templates.
 */
define(['app','semantic','directives'], function(app) {
    'use strict';

    app.controller('UserFormController',['$scope','$injector',
        function UserFormController($scope,$injector) {
            require(['controllers/UserFormController'], function(UserFormController) {
                // injector method takes an array of modules as the first argument
                // if you want your controller to be able to use components from
                // any of your other modules, make sure you include it together with 'ng'
                // Furthermore we need to pass on the $scope as it's unique to this controller
                $injector.invoke(UserFormController, this, {'$scope': $scope});
            });
        }]);
    app.controller('LoginController',['$scope', '$injector',
        function LoginController($scope,$injector) {
            require(['controllers/LoginController'], function(LoginController) {
                // injector method takes an array of modules as the first argument
                // if you want your controller to be able to use components from
                // any of your other modules, make sure you include it together with 'ng'
                // Furthermore we need to pass on the $scope as it's unique to this controller
                $injector.invoke(LoginController, this, {'$scope': $scope});
            });
        }]);
    app.controller('RegisterController',['$scope', '$injector',
        function RegisterController($scope,$injector) {
            require(['controllers/RegisterController'], function(RegisterController) {
                // injector method takes an array of modules as the first argument
                // if you want your controller to be able to use components from
                // any of your other modules, make sure you include it together with 'ng'
                // Furthermore we need to pass on the $scope as it's unique to this controller
                $injector.invoke(RegisterController, this, {'$scope': $scope});
            });
        }]);
    app.controller('HomeController',['$scope', '$injector',
        function HomeController($scope,$injector) {
            require(['controllers/HomeController'], function(HomeController){
                // injector method takes an array of modules as the first argument
                // if you want your controller to be able to use components from
                // any of your other modules, make sure you include it together with 'ng'
                // Furthermore we need to pass on the $scope as it's unique to this controller
                $injector.invoke(HomeController, this, {'$scope': $scope});
            });
        }]);
});