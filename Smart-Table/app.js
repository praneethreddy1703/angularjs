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


