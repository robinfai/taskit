/**
 * Created by Administrator on 13-11-6.
 */
define(['app','semantic'],function(app){

    app.directive('userTab', function () {
        var userTab = function ($scope, $element, $attrs, $ctrl) {
            $($element).find('.item').tab();
        }

        return {compile: function () {
            return userTab
        }}
    });

    app.directive('userForm', function () {
        var userForm = function ($scope, $element, $attrs, $ctrl) {
            console.log($($element))
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