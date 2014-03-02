/**
 * Created with JetBrains PhpStorm.
 * User: robinfai
 * Date: 13-10-25
 * Time: 下午8:57
 * To change this template use File | Settings | File Templates.
 */
require.config({
    paths: {
        angular:'angular',
        angularRoute: 'angular/angular-route',
        angularAnimate: 'angular/angular-animate',
        angularUI: 'lib/angular-ui',
        dateRangePicker:'lib/daterangepicker',
        jqueryUISortable:'lib/jquery-ui/ui/jquery.ui.sortable',
        jqueryUIMouse:'lib/jquery-ui/ui/jquery.ui.mouse',
        jqueryUI:'lib/jquery-ui'
        //jquery:'jquery'
        //angularMocks: '../../bower_components/angular-mocks/angular-mocks',
        //text: '../../bower_components/requirejs-text/text'
    },
    baseUrl: 'javascript',
    shim: {
        'angular' : {
            'deps':['jquery'],
            'exports' : 'angular'
        },
        'angularUI': ['angular','jqueryUI'],
        'angularRoute': ['angular'],
        'angularAnimate': ['angular'],
        'semantic':['jquery'],
        'dateRangePicker':['jquery'],
        'jquery':{'exports':'$'}
    },
    priority: [
        "angular"
    ]
});

window.name = "NG_DEFER_BOOTSTRAP!";
var apiUrl = '/taskit/api/index.php'

require(['angular','app','routes'], function (angular,app,routes){
    'use strict';

    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function() {
        $html.addClass('ng-app');
        angular.bootstrap($html, [app['name']]);
    });
});