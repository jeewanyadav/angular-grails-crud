app.factory("UserService",function ($http) {

    var factory={};
    factory.register=function (user) {
        return $http.post("user/register",user).success(function (data) {
            return data;
        });
    }
    factory.userList=function () {
        return $http.get("http://localhost:8080/angularingrails/user/userList").success(function (data) {
            return data;
        });
    }
    factory.deleteUser=function (user) {
        return $http.post("user/delete",user).success(function (data) {
            return data;
        });
    }
    return factory;

});