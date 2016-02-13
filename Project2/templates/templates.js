var myApp =angular.module('myApp',['ngRoute']);
myApp.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/templates',{
        templateUrl:'templates.html',
        controller:'mainCtrl'
    })
    .when('/pay',{
        templateUrl:'pay.html',
        controller:'mainCtrl'
    })
    .when('/templates/:templateId',{
            templateUrl: 'details.html',
            controller: 'subCtrl'
        })
    .otherwise({redirectTo: '/templates'});
}]);

myApp.controller('mainCtrl',['$scope','$http', function($scope, $http){
    $http.get('json/templates.json').then(function(response){
            $scope.templates = response.data;
            console.log(response.data);
        });
    $scope.card=[
        {'type': 'Credit Card Visa'},
        {'type': 'Credit Card Maestro'},
        {'type': 'Debit Card Visa'},
        {'type': 'Credit Card Maestro'}
    ];
        

    
}]);

myApp.controller('subCtrl', ['$scope', '$http', '$routeParams', '$filter', function($scope, $http, $routeParams, $filter){
    var templateId = $routeParams.templateId;
    $http.get('json/templates.json').then(function(response){
        $scope.template = $filter('filter')(response.data, function(d){
            return d.id == templateId;
        })[0];

        $scope.mainImage = $scope.template.images[0].name;
    });

    $scope.setImage =  function(image){
        $scope.mainImage =  image.name;
    };
}]);