/**
 * Created with JetBrains PhpStorm.
 * User: robinfai
 * Date: 13-10-27
 * Time: 上午8:47
 * To change this template use File | Settings | File Templates.
 */
define(['app','semantic','lib/moment','dateRangePicker'],function(app){

    app.directive('cardModal',function(){
        var cardModal = function($scope,$element,$attrs,$ctrl){
            $element.on('click',function(){
                $(this).parent().find('.add-card')
                    .modal({
                        context:$(this).parent(),
                        onHide:function(){
                            $(this).find('[dropdown]').dropdown('hide')
                        }
                    })
                    .modal('show');
                $(this).parent().find('.card-'+$(this).attr('card-modal')).dropdown('show');
            })

        }

        return {compile: function () {
            return cardModal
        }}
    })

    app.directive('daterangepicker',function(){
        var daterangepicker = function($scope,$element,$attrs,$ctrl){
            $element.daterangepicker({
                    format: 'YYYY-MM-DD',
                    parentEl:$element.parent(),
                    applyClass:'ui secondary button tiny',
                    cancelClass:'ui button tiny',
                });
            $element.on('hidden',function(){
                $scope.$parent.item.date = $(this).val();
                $scope.$parent.$apply();
            });
        }
        return {compile: function () {
            return daterangepicker
        }}
    });

    app.directive('shape', function () {
        var shape = function ($scope, $element, $attrs, $ctrl) {
            var shapeElement = $element.find('.shape');
            if($element.attr('duration')){
                shapeElement.shape('set default side','.default.side').shape({duration:$element.attr('duration')});
            }else{
                shapeElement.shape('set default side','.default.side').shape();
            }

            $element.find('[shape-click]').click(function(){
                if($(this).attr('data-value')){
                    var selector = '.'+$(this).attr('data-value')+'.side';
                    if(!$($element).find(selector).size()){
                        selector = '.default.side';
                    }
                    shapeElement.shape('set next side', selector);
                }
                shapeElement.shape('flip '+$(this).attr('shape-click'));
            })
        }

        return {compile: function () {
            return shape
        }}
    });
    app.directive('tabLink', function () {
        var tabLink = function ($scope, $element, $attrs, $ctrl) {
            $element.find('a').click(function(){
                if(!$(this).hasClass('active')){
                    $element.find('a').removeClass('active');
                    $(this).addClass('active');
                }
                return true;
            })
        }

        return {compile: function () {
            return tabLink
        }}
    });
    app.directive('cardDropdown', function () {
        var dropdown = function ($scope, $element, $attrs, $ctrl) {
            $($element).dropdown({
                onShow:function(){
                    if(!$(this).find('.default.side').hasClass('active')){
                        $(this).find('.shape')
                            .shape('set next side', '.default.side')
                            .shape('flip up')
                        ;
                    }
                }
            });
        }

        return {compile: function () {
            return dropdown
        }}
    });
    app.directive('dropdown', function () {
        var dropdown = function ($scope, $element, $attrs, $ctrl) {
            $($element).dropdown();
        }

        return {compile: function () {
            return dropdown
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