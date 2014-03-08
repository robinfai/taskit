/**
 * Created by robinfai on 11/3/13.
 */
define([], function () {
    return ['$scope', '$http', '$location', function ($scope, $http, $location) {
        // You can access the scope of the controller from here
        $scope.logout = function () {
            $location.path("/user-form");
        }
        $scope.$on('addProject', function () {
            $scope.$broadcast('AppAddProject')
        });

        $scope.sortableOptions = {
            items:'.sortable-item'
        };

        // because this has happened asynchroneusly we've missed
        // Angular's initial call to $apply after the controller has been loaded
        // hence we need to explicityly call it at the end of our Controller constructor
        $scope.$apply();
    }];
});