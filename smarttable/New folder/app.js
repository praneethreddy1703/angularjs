var myApp=angular.module('myApp',['ngSanitize','ngCsv']);

myApp.service("myService",function(){
	this.send="";
	this.fname="";
	this.lname="";

});

myApp.directive("display",function(){
	return {
		templateUrl:"directives/directives.html",
		replace: true
	}
});


myApp.controller("mainController",["$scope",'myService',function($scope,myService){
	$scope.myData=[
		{firstname:"Praneeth",lastname:"Reddy"},
		{firstname:"ME",lastname:"Reddy"},
		{firstname:"My",lastname:"Red"},
		{firstname:"Mine",lastname:"Reddy"}
	];
	/*$scope.myData={
		firstname:"Praneeth",
		lastname:"Reddy"
	}*/
	$scope.getHeader = function () {return ["firstname", "lastname"]};


	//$scope.search = this.search;

	$scope.send=myService.send;
	$scope.fname=myService.fname;
	$scope.lname=myService.lname;
    $scope.$watch('send','fname','lname',function(){
        myService.send=$scope.send;
        myService.fname=$scope.fname;
        myService.lname=$scope.lname;
    });

    
    $scope.add=function (){
    	$scope.myData.push({firstname:$scope.fname,lastname:$scope.lname})
    	console.log(myService.fname);
    	console.log($scope.myData);
    }
    $scope.name=function (){
    	$scope.FNAME=$scope.myData.firstname;
    	console.log($scope.myData.firstname);
    }
	

}]);