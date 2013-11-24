/**
 * Created with JetBrains PhpStorm.
 * User: robinfai
 * Date: 13-10-27
 * Time: 上午8:25
 * To change this template use File | Settings | File Templates.
 */
define(['app','semantic','directives','filters'], function(app) {
    'use strict';

    app.controller('AppController',['$scope','$injector',
        function AppController($scope,$injector) {
            require(['controllers/AppController'], function(AppController) {
                // injector method takes an array of modules as the first argument
                // if you want your controller to be able to use components from
                // any of your other modules, make sure you include it together with 'ng'
                // Furthermore we need to pass on the $scope as it's unique to this controller
                $injector.invoke(AppController, this, {'$scope': $scope});
            });
        }]);
    app.controller('UserFormController',['$scope','$injector',
        function UserFormController($scope,$injector) {
            require(['controllers/UserFormController'], function(UserFormController) {
                $injector.invoke(UserFormController, this, {'$scope': $scope});
            });
        }]);
    app.controller('LoginController',['$scope', '$injector',
        function LoginController($scope,$injector) {
            require(['controllers/LoginController'], function(LoginController) {
                $injector.invoke(LoginController, this, {'$scope': $scope});
            });
        }]);
    app.controller('RegisterController',['$scope', '$injector',
        function RegisterController($scope,$injector) {
            require(['controllers/RegisterController'], function(RegisterController) {
                $injector.invoke(RegisterController, this, {'$scope': $scope});
            });
        }]);
    app.controller('HomeController',['$scope', '$injector',
        function HomeController($scope,$injector) {
            require(['controllers/HomeController'], function(HomeController){
                $injector.invoke(HomeController, this, {'$scope': $scope});
            });
        }]);
    app.controller('TaskAllController',['$scope', '$injector',
        function TaskAllController($scope,$injector) {
            require(['controllers/TaskAllController'], function(TaskAllController){
                $injector.invoke(TaskAllController, this, {'$scope': $scope});
            });
        }]);
    app.controller('CardController',['$scope', '$injector',
        function CardController($scope,$injector) {
            require(['controllers/CardController'], function(CardController){
                $injector.invoke(CardController, this, {'$scope': $scope});
            });
        }]);
    app.controller('LeftSidebarController',['$scope', '$injector',
        function LeftSidebarController($scope,$injector) {
            require(['controllers/LeftSidebarController'], function(LeftSidebarController){
                $injector.invoke(LeftSidebarController, this, {'$scope': $scope});
            });
        }]);

});