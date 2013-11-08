/**
 * Created by robinfai on 10/29/13.
 */
define([], function () {
    return ['$scope', '$http', '$location', function ($scope, $http, $location) {
        // You can access the scope of the controller from here
        $scope.template = {url:"partials/task/all.html"};
        $scope.createTask = function () {
            $scope.items.unshift({
                title:'测试任务列表'+$scope.items.length,
                content:'How does one go about reading answers to questions in a FAQ'
            })
        };
        $scope.items = [
            {
                title:'测试任务列表',
                content:'How does one go about reading answers to questions in a FAQ'
            },
        ]
        // because this has happened asynchroneusly we've missed
        // Angular's initial call to $apply after the controller has been loaded
        // hence we need to explicityly call it at the end of our Controller constructor
        $scope.$apply();
    }];
});