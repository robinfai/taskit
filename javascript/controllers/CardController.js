/**
 * Created by apple on 2013-11-22.
 */

define([], function () {
    return ['$scope', '$http', '$location', function ($scope, $http, $location) {
        // You can access the scope of the controller from here

        $scope.isShowItemOperate = false;
        $scope.showItemOperate = function(){
            if(!$scope.isShowItemOperate){
                $scope.$emit('showItemOperate','123');
            }
            $scope.isShowItemOperate = !$scope.isShowItemOperate;
        }
        $scope.colors = [];
        $scope.activeColors = [];
        $scope.changeColor = function($color){
            var index = $scope.colors.indexOf($color);
            if(index != -1){
                $scope.colors.splice(index,1);
            }else{
                $scope.colors.push($color);
            }

            $scope.activeColors[$color] = !$scope.activeColors[$color];

        }

        $scope.members = ['robinfai','taskit','jlds','ssdw','why','uudxvh','rrtchs','dsayd'];
        $scope.selectedMember = [];
        $scope.selectMember = function(member){
            var index = $scope.selectedMember.indexOf(member);
            if( index != -1){
                console.log();
                $scope.selectedMember.splice(index,1);
            }else{
                $scope.selectedMember.push(member);
            }
            //$scope.selectedMember[member] = !$scope.selectedMember[member];

        }

        $scope.$on("hideAllItemOperate",function(){
            $scope.isShowItemOperate = false;
        })
        $scope.changeColor = function($color){
            var index = $scope.colors.indexOf($color);
            if(index != -1){
                $scope.colors.splice(index,1);
            }else{
                $scope.colors.push($color);
            }

            $scope.activeColors[$color] = !$scope.activeColors[$color];

        }

        $scope.isSubscribe = false;
        $scope.changeSubscribe = function(){
            $scope.isSubscribe = !$scope.isSubscribe;
        }

        $scope.showCreateCardModal = function(){
            $('.add-card')
                .modal('setting',{duration:0})
                .modal('show');
            $('.ui.checkbox')
                .checkbox()
            ;
        }

        // because this has happened asynchroneusly we've missed
        // Angular's initial call to $apply after the controller has been loaded
        // hence we need to explicityly call it at the end of our Controller constructor
        $scope.$apply();
    }];
});
