/**
 * Created with JetBrains PhpStorm.
 * User: robinfai
 * Date: 13-10-17
 * Time: 下午11:26
 * To change this template use File | Settings | File Templates.
 */

function RegisterController($scope,$element) {
    var registrationForm = $($element);

    $scope.isInvalid = function() {
        return !registrationForm.form('validate form');
    };

    $scope.register = function () {
        if (this.isInvalid()) {
            return;
        }

        alert("Register was clicked!");
    };
}
function LoginController($scope,$element) {
    var loginForm = $($element);
    $scope.user = {};
    $scope.isInvalid = function() {
        return !loginForm.form('validate form');
    };

    $scope.login = function () {
        if (this.isInvalid()) {
            return;
        }
        this.loading = true;
        console.log(this.user);
    };
}


(function ($) {
    $('#user-form-tab .item').tab();
    $('.ui.form').form({
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
    },{
        inline : true,
        on     : 'blur'
    });
})(jQuery);