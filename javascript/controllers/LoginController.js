/**
 * Created with JetBrains PhpStorm.
 * User: robinfai
 * Date: 13-10-27
 * Time: 上午8:26
 * To change this template use File | Settings | File Templates.
 */
define([], function() {
    return ['$scope', '$http', function($scope, $http) {
        // You can access the scope of the controller from here
        $scope.requestUrl = apiUrl+'/user/login';
        $scope.submit = function () {
            console.log(1)
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

        // because this has happened asynchroneusly we've missed
        // Angular's initial call to $apply after the controller has been loaded
        // hence we need to explicityly call it at the end of our Controller constructor
        $scope.$apply();
    }];
});