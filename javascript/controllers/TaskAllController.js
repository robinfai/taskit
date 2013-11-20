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
        $scope.boards = [
            {
                name:'测试看板',
                items:[
                    {
                        title:'测试任务列表',
                        content:'How does one go about reading answers to questions in a FAQ'
                    },
                    {
                        title:'测试任务列表',
                        content:'How does one go about reading answers to questions in a FAQ'
                    },
                ]
            },
            {
                name:'测试看板4',
                items:[
                    {
                        title:'测试任务列表',
                        content:'How does one go about reading answers to questions in a FAQ'
                    },
                    {
                        title:'测试任务列表',
                        content:'How does one go about reading answers to questions in a FAQ'
                    },
                    {
                        title:'测试任务列表',
                        content:'How does one go about reading answers to questions in a FAQ'
                    },
                    {
                        title:'测试任务列表',
                        content:'How does one go about reading answers to questions in a FAQ'
                    },
                    {
                        title:'测试任务列表',
                        content:'How does one go about reading answers to questions in a FAQ'
                    },
                    {
                        title:'测试任务列表',
                        content:'How does one go about reading answers to questions in a FAQ'
                    },
                    {
                        title:'测试任务列表',
                        content:'How does one go about reading answers to questions in a FAQ'
                    },
                    {
                        title:'测试任务列表',
                        content:'How does one go about reading answers to questions in a FAQ'
                    },
                ]
            }
        ];
        $scope.itemWidth = 350;
        $scope.setBoardWidth = function(){
            $scope.width = ($scope.boards.length + 1) * $scope.itemWidth + 20;
        };
        $scope.setBoardWidth();
        $scope.isShowAddCard = {};
        $scope.showAddCard = function($index){
            for(var i in $scope.isShowAddCard){
                $scope.isShowAddCard[i] = false;
            }
            $scope.isShowAddCard[$index] = true;
        }
        $scope.card = {};
        $scope.addCard = function($index){
            $scope.boards[$index].items.push({content:this.card[$index]})
            this.card[$index] = '';
            $scope.isShowAddCard[$index] = false;
        }

        $scope.isShowAddBoard = false;
        $scope.showAddBoard = function(){
            $scope.isShowAddBoard = true;
        }

        $scope.addBoard = function(){
            $scope.boards.push({name:$scope.board,items:[]});
            $scope.board = '';
            $scope.isShowAddBoard = false;
            $scope.setBoardWidth();
        }

        $scope.boardTextFocus = false;

        // because this has happened asynchroneusly we've missed
        // Angular's initial call to $apply after the controller has been loaded
        // hence we need to explicityly call it at the end of our Controller constructor
        $scope.$apply();
    }];
});