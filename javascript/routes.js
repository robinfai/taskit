/**
 * Created with JetBrains PhpStorm.
 * User: robinfai
 * Date: 13-10-26
 * Time: 下午9:25
 * To change this template use File | Settings | File Templates.
 */
define(['angular', 'app','controllers'], function(angular, app) {
    'use strict';

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/user-form', {
                    templateUrl: 'partials/user-form.html',
                    controller: 'UserFormController'
                }).
                when('/home', {
                    templateUrl: 'partials/home.html',
                    controller: 'HomeController'
                }).
                when('/task/all', {
                    templateUrl: 'partials/home.html',
                    controller: 'HomeController'
                }).
                otherwise({
                    redirectTo: '/user-form'
                });

        }]);

});