myApp.controller("mainController",["$scope",'myService',function($scope,myService){

	$scope.myData=[
		{firstname:"Praneeth",lastname:"Reddy"},
		{firstname:"ME",lastname:"Reddy"},
		{firstname:"My",lastname:"Red"},
		{firstname:"Mine",lastname:"Reddy"}
	];

	$scope.getHeader = function () {return ["firstname", "lastname"]};

	$scope.send=myService.send;
	$scope.fname=myService.fname;
	$scope.lname=myService.lname;

    $scope.$watch('send','fname','lname',function(){
        myService.send=$scope.send;
        myService.fname=$scope.fname;
        myService.lname=$scope.lname;
    });

    $scope.add=function (){
    	$scope.myData.push({firstname:$scope.fname,lastname:$scope.lname});
    	$scope.fname="";
    	$scope.lname="";
    	
    };

    $scope.a=0;

    var users=[
                    {usernames:"praneeth",passwords:"praneeth"},
                    {usernames:"praneeth1",passwords:"praneeth1"},
                    {usernames:"Praneeth2",passwords:"praneeth2"},
                    {usernames:"Praneeth3",passwords:"praneeth3"},
                    {usernames:"Praneeth4",passwords:"praneeth4"},
                    {usernames:"Praneeth5",passwords:"praneeth6"}
        ];

    var key=users.length;
    console.log(key);
    console.log(users);

    $scope.check=function (u,p){
        console.log(u);
        console.log("function");
        

        for(var i=0; i <key;i++){

            if(users[i].usernames === u && users[i].passwords === p){
                document.getElementById("checked").innerHTML='<span class="text-success">Successfully Logged Now you can Export Files</span>';
                return $scope.a=1;
                return false;

            }
            else{
            	document.getElementById("checked").innerHTML='<span class="text-danger bg-danger">Wrong Username and Password</span>';
            }
        }

    };
    $scope.a=0;
    $scope.close=function (){
    	$scope.a=0;
    	document.getElementById("checked").innerHTML="";
    	$scope.fileName="";
        $scope.userName="";
        $scope.password="";
    }

}]);