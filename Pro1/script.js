var myApp=angular.module("myApp",['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
    
    .when('/home',{
        templateUrl: '1.html',
        controller: 'mainController'
    })
    .when('/cvraman',{
        templateUrl:'2.html',
        controller:'mainController'
    })
    .when('/gandhi',{
        templateUrl:'3.html',
        controller:'mainController'
    })
    .when('/bs',{
        templateUrl:'4.html',
        controller:'mainController'
    })
    .when('/know',{
        templateUrl:'know.html',
        controller:'mainController'
    })
    .when('/contact',{
        templateUrl:"contact.html",
        controller:"mainController"
    })
    .otherwise('/home',{
        templateUrl: '1.html',
        controller: 'mainController'
    })
    
    
    
});


myApp.controller('mainController',['$scope','$http','$filter', function($scope,$http,$filter){
    $scope.n1="Sir C V Raman";
    $scope.a=1; 
    $http.get('data.json')
     .then(function(response){
         $scope.data=response.data;
     });
    
}]);