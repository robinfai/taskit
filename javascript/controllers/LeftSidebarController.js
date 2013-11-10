/**
 * Created by robinfai on 11/3/13.
 */
define([], function () {
    return ['$scope', '$http', '$location', function ($scope, $http, $location) {
        // You can access the scope of the controller from here
        $scope.openCreateProjectModal = function () {
            //$scope.$emit('addProject');
            $scope.showCreateProjectModal = true;
            $('.add-project')
                .modal('setting',{duration:0})
                .modal('show');
            $('.ui.checkbox')
                .checkbox()
            ;
        }

        $scope.createProject = function(){
            $scope.items.unshift({title:this.projectTitle});
            this.projectTitle = '';
            $scope.showCreateProjectModal = false;
        }

        $scope.items = [
            {
                title:'测试项目-太古'
            },
            {
                title:'测试项目-雀巢'
            }
        ]
        // because this has happened asynchroneusly we've missed
        // Angular's initial call to $apply after the controller has been loaded
        // hence we need to explicityly call it at the end of our Controller constructor
        $scope.$apply();
    }];
});