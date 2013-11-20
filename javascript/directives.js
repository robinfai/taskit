/**
 * Created with JetBrains PhpStorm.
 * User: robinfai
 * Date: 13-10-27
 * Time: 上午8:47
 * To change this template use File | Settings | File Templates.
 */
define(['app','semantic'],function(app){

    app.directive('shape', function () {
        var shape = function ($scope, $element, $attrs, $ctrl) {
            $($element).find('.shape').shape();
            $($element).find('a[shape-click]').click(function(){
                if(!$(this).hasClass('active')){
                    $(this).parent().find('a').removeClass('active');
                    $(this).addClass('active');
                    $($element).find('.shape').shape('flip '+$(this).attr('shape-click'));
                }
            })
        }

        return {compile: function () {
            return shape
        }}
    });

    app.directive('focus', function($timeout, $parse) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                scope.$watch(attrs.focus, function(newValue, oldValue) {
                    if (newValue) { element[0].focus(); }
                });
                element.bind("blur", function(e) {
                    $timeout(function() {
                        scope.$apply(attrs.focus + "=false");
                    }, 0);
                });
            }
        }
    });

    app.directive('userForm', function () {
        var userForm = function ($scope, $element, $attrs, $ctrl) {
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
        }

        return {compile: function () {
            return userForm;
        }}
    });
})