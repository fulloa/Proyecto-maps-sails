app.controller('registrarController', function($scope) {
   $scope.newUser = {
		nombre:"",
		apellido:"",
		email:"",
		pass:""
	};

   $scope.users = [];

	$scope.addNewUser = function (user) {
		 console.log(user);
		 $scope.users.push(angular.extend({},user));	
	}

	$scope.cancel = function (){
    	$scope.location.path("/");
    };
});