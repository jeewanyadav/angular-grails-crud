var app = angular.module("firstModule", ["ui.router"]).config(
    function($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider.state("welcome",{
            url:"/",
            templateUrl:"html/welcome.html"
        })

    });