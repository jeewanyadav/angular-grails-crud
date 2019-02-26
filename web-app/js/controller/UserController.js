app.controller("UserController",function ($controller,$rootScope,$scope,$location,$timeout,UserService) {
    $scope.register=function (user) {
        $scope.showMessage=true;
        UserService.register(user).then(function (response) {
            $scope.successMessage=response.data.message;
            $location.path("/");
            $scope.user={};
            $timeout(function () {
                $scope.userList();
                $scope.showMessage=false;
            },1000);
        });
    }

    $scope.userList=function () {
        UserService.userList().then(function (response) {
            $scope.users=response.data.users;
        });
    }
    $scope.deleteUser=function (index) {
        $scope.showDelMessage=true;
        var user = $scope.users[index];
        UserService.deleteUser(user).then(function (response) {
            $scope.deleteMessage=response.data.message;
            $timeout(function () {
                $scope.userList();
                $scope.showDelMessage=false;
            },1000);
        });
    }
    $scope.editUser=function (index) {
        var user = $scope.users[index];
        $scope.user=user;

    }
});