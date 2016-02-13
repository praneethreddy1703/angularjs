var myApp=angular.module('myApp',['ngRoute','firebase']);

myApp.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'contact/home.html',
        controller:'mainCtrl'
    })
    .when('/contacts',{
        templateUrl:'contact/contact.html',
        controller:'mainCtrl'
    })
   .otherwise({redirectTo:'/'});
}]);
myApp.controller('mainCtrl',['$scope','$firebaseArray',function($scope,$firebaseArray){
    var data = new Firebase('https://mycontact-application.firebaseio.com/contacts');
    $scope.contacts= $firebaseArray(data);
     console.log($scope.name);
    $scope.showadd= false;
    $scope.showaddbutton=true;
    $scope.submitadd= true;
    $scope.submitupdate= false;
    $scope.addtrue=function(){
        $scope.showadd= true;
        $scope.showaddbutton=false;
    }
    
    $scope.edit=function(contact){
        $scope.showadd= true;
        $scope.showaddbutton=false;
        $scope.submitadd= false;
        $scope.submitupdate= true;
        
        $scope.id= contact.$id;
        $scope.name= contact.name;
        $scope.num= contact.num;
        $scope.mail= contact.mail;
        $scope.address= contact.address;
        
    }
    
    $scope.add=function(){
        
        var name,num,mail,address;
        name= $scope.name;
        num= $scope.num;
        mail= $scope.mail;
        address= $scope.address;
        $scope.showadd= false;
        $scope.showaddbutton=true;
        
        if($scope.name!=undefined && $scope.num!=undefined&& $scope.mail!=undefined&& $scope.address!=undefined)
        {
            $scope.contacts.$add({
                name: name,
                num: num,
                mail: mail,
                address: address
            })
            .then(function(data){
                var id= data.key;
                console.log("Contact Id: "+id);
            });
            document.getElementById("added").innerHTML="Successfully Added";
        }
        clearForm();
        
        
    };
    
    $scope.update=function(){
        var id= $scope.id;
        console.log($scope.id);
        var result= $scope.contacts.$getRecord(id);
        console.log(result);
        result.name= $scope.name;
        result.num= $scope.num;
        result.mail= $scope.mail;
        result.address= $scope.address;
        
        $scope.contacts.$save(result).then(function(ref){
            console.log(ref.key);
        });
        document.getElementById("added").innerHTML="Successfully Updated";
        
        $scope.submitadd= true;
        $scope.submitupdate= false;
        $scope.showadd= false;
        $scope.showaddbutton=true;
        clearForm();
        
    }
    function clearForm(){
        $scope.name=undefined;
        $scope.num=undefined;
        $scope.mail=undefined;
        $scope.address=undefined;
    }
    
    $scope.delete=function(contact){
        $scope.contacts.$remove(contact);
         document.getElementById("added").innerHTML="Successfully Deleted";
    }
    
        
}]);